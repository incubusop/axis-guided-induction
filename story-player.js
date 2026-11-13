(() => {
  'use strict';
  const data = window.AXIS_STORY;
  if (!data) return;

  const parts = data.parts.map((_, index) => document.getElementById(`audioPart${index}`));
  const heroImage = document.getElementById('heroImage');
  const heroTitle = document.getElementById('heroTitle');
  const heroKicker = document.getElementById('heroKicker');
  const heroDeck = document.getElementById('heroDeck');
  const heroCurrent = document.getElementById('heroCurrent');
  const heroTotal = document.getElementById('heroTotal');
  const dockChapter = document.getElementById('dockChapter');
  const liveCaption = document.getElementById('liveCaption');
  const playToggle = document.getElementById('playToggle');
  const playIcon = document.getElementById('playIcon');
  const seek = document.getElementById('audioSeek');
  const progress = document.getElementById('dockProgress');
  const clock = document.getElementById('audioClock');
  const resumeLabel = document.getElementById('resumeLabel');
  const captionToggle = document.getElementById('captionToggle');
  const nav = document.getElementById('chapterNav');
  const storyList = document.getElementById('storyList');
  const storageKey = `axis-story:${data.id}:v2`;
  const stored = readSaved();
  const partDurations = Array(parts.length).fill(0);
  const partCues = parts.map(() => []);
  let cues = [];
  let ready = false;
  let activePart = Math.min(stored.part || 0, parts.length - 1);
  let activeScene = 0;
  let activeCueIndex = -1;
  let seeking = false;
  let lastSavedAt = 0;

  function readSaved() {
    try { return JSON.parse(localStorage.getItem(storageKey) || '{}'); }
    catch (_) { return {}; }
  }
  function saveProgress(partIndex, time, complete = false, force = false) {
    const now = Date.now();
    if (!force && !complete && now - lastSavedAt < 1800) return;
    lastSavedAt = now;
    try { localStorage.setItem(storageKey, JSON.stringify({ part: partIndex, time, complete, scroll: window.scrollY, updated: now })); }
    catch (_) { /* Playback remains available if local storage is disabled. */ }
  }
  function words(text) { return (text.match(/[\p{L}\p{N}’'-]+/gu) || []).length; }
  function sentences(text) {
    const found = text.match(/[^.!?]+[.!?]+(?:[”’"')\]]*)|[^.!?]+$/gu);
    return (found || [text]).map(line => line.trim()).filter(Boolean);
  }
  function formatTime(value) {
    const sec = Math.max(0, Math.floor(Number(value) || 0));
    return `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;
  }
  function totalDuration() { return partDurations.reduce((sum, value) => sum + value, 0); }
  function prefixDuration(partIndex) { return partDurations.slice(0, partIndex).reduce((sum, value) => sum + value, 0); }
  function globalTime() { return prefixDuration(activePart) + (parts[activePart].currentTime || 0); }
  function sectionText(section) { return section.transcript.flatMap(group => group.paragraphs); }
  function renderStory() {
    const visible = data.sections.filter(section => section.showCard !== false);
    nav.innerHTML = visible.map(section => `<a href="#${section.id}" data-jump-scene="${section.index}"><span>${section.number}</span>${section.navTitle || section.title}</a>`).join('');
    storyList.innerHTML = visible.map(section => {
      const paragraphHtml = sectionText(section).map(paragraph => `<p>${paragraph}</p>`).join('');
      const stepsHtml = section.steps?.length ? `<ol class="step-list">${section.steps.map(step => `<li>${step}</li>`).join('')}</ol>` : '';
      const noteHtml = section.note ? `<p class="mobile-screen-note"><strong>${section.noteTitle || 'On your phone'}</strong> ${section.note}</p>` : '';
      const spoken = section.transcript.map(group => group.paragraphs.join(' ')).join(' ');
      const artHtml = section.phone ? `<figure class="scene-art phone-art"><div class="phone-device" data-phone-scene="${section.index}" aria-label="Illustrated One Axis mobile screen"><div class="phone-hardware"><span></span></div><div class="phone-screen"><div class="phone-status"><span>9:41</span><span>● ● ●</span></div><div class="phone-appbar"><span class="phone-back">‹</span><span>one axis</span><span>⋮</span></div><div class="phone-content"><p class="phone-greeting">${section.phone.eyebrow || 'AXIS BANK'}</p><h3>${section.phone.title || section.navTitle}</h3>${section.phone.subtitle ? `<p class="phone-subtitle">${section.phone.subtitle}</p>` : ''}<div class="phone-rows">${section.phone.rows.map((row, i) => `<div class="phone-row" data-phone-row="${i}"><span class="phone-row-icon">${row.icon || '›'}</span><span><b>${row.label}</b>${row.detail ? `<small>${row.detail}</small>` : ''}</span><i>${row.end || '›'}</i></div>`).join('')}</div>${section.phone.button ? `<div class="phone-action">${section.phone.button}</div>` : ''}<p class="phone-foot">${section.phone.foot || 'Axis Bank · One Axis'}</p></div></div></div><figcaption>${section.phone.caption || 'Illustrated One Axis app screen · narration highlights each action'}</figcaption></figure>` : '';
      return `<article class="story-scene" id="${section.id}" data-scene-index="${section.index}">
        <div class="scene-copy">
          <p class="scene-kicker">${section.number} <span>·</span> ${section.kicker}</p>
          <h2>${section.title}</h2>
          ${section.summary ? `<p class="scene-summary">${section.summary}</p>` : ''}
          <div class="scene-transcript" aria-label="Narration transcript">${paragraphHtml}</div>
          ${stepsHtml}${noteHtml}
          <button class="scene-play" type="button" data-scene-play="${section.index}"><span>▶</span> Listen from this step</button>
        </div>
        ${artHtml}
        <span class="sr-only">${spoken}</span>
      </article>`;
    }).join('');
  }

  function buildCues() {
    partCues.forEach(list => { list.length = 0; });
    data.sections.forEach(section => {
      section.cues = [];
      section.transcript.forEach(group => {
        const pIndex = group.part;
        section.cues ||= [];
        group.paragraphs.forEach(paragraph => sentences(paragraph).forEach(line => {
          const cue = { part: pIndex, scene: section.index, text: line, weight: Math.max(2, words(line) + 1) };
          partCues[pIndex].push(cue);
          section.cues.push(cue);
        }));
      });
    });
    partCues.forEach((partList, partIndex) => {
      const totalWeight = partList.reduce((sum, cue) => sum + cue.weight, 0) || 1;
      let offset = 0;
      partList.forEach(cue => {
        cue.start = offset;
        cue.duration = partDurations[partIndex] * cue.weight / totalWeight;
        cue.end = cue.start + cue.duration;
        offset = cue.end;
      });
    });
    // Optional hand-timed scene boundaries: { sectionId: { part, start, end } }.
    // Each scene's caption sentences are then distributed across its own interval.
    if (data.sceneTimings) {
      Object.entries(data.sceneTimings).forEach(([sectionId, value]) => {
        const section = data.sections.find(item => item.id === sectionId);
        if (!section || !value) return;
        (Array.isArray(value) ? value : [value]).forEach(timing => {
          if (!partCues[timing.part]) return;
          const sceneCues = partCues[timing.part].filter(cue => cue.scene === section.index);
          if (!sceneCues.length) return;
          const start = Number(timing.start) || 0;
          const end = Number(timing.end);
          if (!Number.isFinite(end) || end <= start) return;
          const weight = sceneCues.reduce((sum, cue) => sum + cue.weight, 0) || 1;
          let offset = start;
          sceneCues.forEach(cue => {
            cue.start = offset;
            cue.duration = (end - start) * cue.weight / weight;
            cue.end = cue.start + cue.duration;
            offset = cue.end;
          });
        });
      });
    }
    cues = partCues.flat();
  }

  function setScene(index, options = {}) {
    const safeIndex = Math.max(0, Math.min(data.sections.length - 1, Number(index) || 0));
    const section = data.sections[safeIndex];
    if (!section || safeIndex === activeScene && !options.force) return;
    activeScene = safeIndex;
    updatePhoneHighlight({ scene: safeIndex, text: '' });
    heroImage.style.backgroundImage = `url("${section.heroImage || section.image || data.defaultImage}")`;
    heroImage.setAttribute('aria-label', section.heroAlt || section.alt || section.title);
    heroImage.classList.remove('reframe');
    requestAnimationFrame(() => heroImage.classList.add('reframe'));
    heroTitle.innerHTML = section.heroTitle || section.title;
    heroKicker.innerHTML = `${section.heroKicker || section.kicker} <span>·</span> ${section.number} / ${data.totalLabel}`;
    heroDeck.textContent = section.heroDeck || section.summary || section.title;
    heroCurrent.textContent = section.number;
    heroTotal.textContent = data.totalLabel;
    dockChapter.textContent = `${section.number} · ${section.title}`;
    document.querySelectorAll('[data-scene-index]').forEach(el => el.classList.toggle('is-active', Number(el.dataset.sceneIndex) === safeIndex));
    nav.querySelectorAll('[data-jump-scene]').forEach(el => {
      const isCurrent = Number(el.dataset.jumpScene) === safeIndex;
      el.classList.toggle('is-active', isCurrent);
      if (isCurrent) el.setAttribute('aria-current', 'step'); else el.removeAttribute('aria-current');
    });
    if ((options.scroll || options.audioSync) && section.showCard !== false) {
      const phone = document.querySelector(`[data-phone-scene="${safeIndex}"]`);
      const target = phone && window.matchMedia('(max-width: 600px)').matches ? phone : document.getElementById(section.id);
      target?.scrollIntoView({ behavior: 'smooth', block: phone && target === phone ? 'center' : 'start' });
    }
  }

  function setCaption(text) {
    liveCaption.textContent = text || data.idleCaption;
    liveCaption.closest('.dock-caption').classList.toggle('is-quiet', !text);
  }
  function updateCue() {
    const audio = parts[activePart];
    const t = audio.currentTime || 0;
    const active = partCues[activePart].find(cue => t >= cue.start && t < cue.end) || partCues[activePart].at(-1);
    if (!active) return;
    if (active.scene !== activeScene) setScene(active.scene, { audioSync: !parts[activePart].paused });
    const cueIndex = cues.indexOf(active);
    if (cueIndex !== activeCueIndex) {
      activeCueIndex = cueIndex;
      setCaption(active.text);
      heroImage.classList.remove('reframe');
      requestAnimationFrame(() => heroImage.classList.add('reframe'));
      updatePhoneHighlight(active);
    }
  }
  function updatePhoneHighlight(cue) {
    document.querySelectorAll('.phone-device').forEach(phone => {
      const section = data.sections[Number(phone.dataset.phoneScene)];
      const rows = [...phone.querySelectorAll('[data-phone-row]')];
      rows.forEach(row => row.classList.remove('is-highlighted'));
      if (!section || section.index !== cue.scene || !rows.length) return;
      const sceneCues = section.cues || [];
      const activeIndex = Math.max(0, sceneCues.indexOf(cue));
      const now = parts[activePart]?.currentTime || 0;
      const timed = section.phone.highlights?.filter(mark => mark.part === activePart && Number(mark.time) <= now).at(-1);
      const rowIndex = timed ? Math.min(rows.length - 1, Math.max(0, Number(timed.row) || 0)) : Math.min(rows.length - 1, Math.floor(activeIndex / Math.max(1, sceneCues.length) * rows.length));
      rows[rowIndex]?.classList.add('is-highlighted');
    });
  }
  function updatePlayer() {
    const duration = totalDuration() || 1;
    const now = globalTime();
    const percent = Math.min(100, Math.max(0, now / duration * 100));
    progress.style.width = `${percent}%`;
    if (!seeking) seek.value = String(percent);
    clock.innerHTML = `${formatTime(now)} <i>/</i> ${formatTime(duration)}`;
    updateCue();
    saveProgress(activePart, parts[activePart].currentTime || 0);
  }
  function setPlayingUI(playing) {
    playIcon.textContent = playing ? 'Ⅱ' : '▶';
    playToggle.setAttribute('aria-label', playing ? 'Pause narration' : 'Play narration');
    document.body.classList.toggle('is-playing', playing);
  }
  function playCurrent() {
    const audio = parts[activePart];
    if (audio.ended || audio.currentTime >= audio.duration - .15) {
      if (activePart < parts.length - 1) switchPart(activePart + 1, 0, false);
      else { switchPart(0, 0, false); }
    }
    parts[activePart].play().then(() => setPlayingUI(true)).catch(() => {
      setCaption('Tap play to start the narration.');
      setPlayingUI(false);
    });
  }
  function pauseAll() { parts.forEach(audio => audio.pause()); setPlayingUI(false); }
  function switchPart(nextIndex, time = 0, autoPlay = true) {
    const wasPlaying = autoPlay;
    pauseAll();
    activePart = Math.max(0, Math.min(parts.length - 1, nextIndex));
    const audio = parts[activePart];
    if (audio.readyState >= 1) audio.currentTime = Math.min(time, Math.max(0, audio.duration - .1));
    else audio.addEventListener('loadedmetadata', () => { audio.currentTime = Math.min(time, Math.max(0, audio.duration - .1)); }, { once: true });
    updatePlayer();
    if (wasPlaying) playCurrent();
  }
  function seekToGlobalTime(value, autoPlay = false) {
    let remaining = Math.max(0, Math.min(totalDuration(), value));
    let chosen = parts.length - 1;
    for (let i = 0; i < parts.length; i += 1) {
      if (remaining <= partDurations[i] || i === parts.length - 1) { chosen = i; break; }
      remaining -= partDurations[i];
    }
    switchPart(chosen, remaining, autoPlay);
  }
  function playScene(index) {
    const target = Number(index);
    const section = data.sections[target];
    if (!section?.cues?.length) return;
    const first = section.cues[0];
    pauseAll();
    setScene(target, { scroll: true, force: true });
    switchPart(first.part, first.start, true);
  }
  function selectRelativeScene(direction) {
    const navigable = data.sections.filter(section => section.showCard !== false).map(section => section.index);
    const currentPosition = navigable.indexOf(activeScene);
    const next = navigable[Math.min(navigable.length - 1, Math.max(0, currentPosition + direction))];
    if (next !== undefined) playScene(next);
    else if (direction < 0) playScene(0);
  }

  renderStory();
  buildCues();
  setScene(0, { force: true });
  setCaption(data.idleCaption);

  const metadataSeen = new Set();
  let metadataLoaded = 0;
  parts.forEach((audio, index) => {
    audio.addEventListener('loadedmetadata', () => {
      if (metadataSeen.has(index)) return;
      metadataSeen.add(index);
      partDurations[index] = Number.isFinite(audio.duration) ? audio.duration : 0;
      metadataLoaded += 1;
      if (metadataLoaded === parts.length) {
        ready = true;
        buildCues();
        const savedPart = Math.max(0, Math.min(parts.length - 1, Number(stored.part) || 0));
        const savedTime = Math.max(0, Number(stored.time) || 0);
        if (stored.complete) {
          activePart = 0;
          resumeLabel.textContent = 'Complete · replay anytime';
        } else if (stored.updated && (savedTime > 2 || savedPart > 0)) {
          activePart = savedPart;
          audio.currentTime = 0;
          parts[activePart].currentTime = Math.min(savedTime, Math.max(0, parts[activePart].duration - .2));
          resumeLabel.textContent = 'Progress saved · ready to resume';
          updatePlayer();
          requestAnimationFrame(() => window.scrollTo(0, Math.max(0, Number(stored.scroll) || 0)));
        } else {
          resumeLabel.textContent = 'Your place saves as you listen';
          updatePlayer();
        }
      }
    });
    audio.addEventListener('timeupdate', updatePlayer);
    audio.addEventListener('play', () => setPlayingUI(true));
    audio.addEventListener('pause', () => { if (parts.every(item => item.paused)) setPlayingUI(false); });
    audio.addEventListener('ended', () => {
      saveProgress(index, audio.duration || 0);
      if (index < parts.length - 1) switchPart(index + 1, 0, true);
      else {
        pauseAll();
        saveProgress(0, 0, true);
        resumeLabel.textContent = 'Complete · replay anytime';
        setCaption(data.endCaption || data.idleCaption);
        if (data.sections.length) setScene(data.sections.at(-1).index, { force: true });
      }
    });
    audio.addEventListener('error', () => {
      setPlayingUI(false);
      setCaption('Audio could not be loaded. Refresh the page and try again.');
    });
    if (audio.readyState >= 1) audio.dispatchEvent(new Event('loadedmetadata'));
  });

  playToggle.addEventListener('click', () => parts.some(audio => !audio.paused) ? pauseAll() : playCurrent());
  document.getElementById('backChapter').addEventListener('click', () => selectRelativeScene(-1));
  document.getElementById('forwardChapter').addEventListener('click', () => selectRelativeScene(1));
  seek.addEventListener('input', () => {
    seeking = true;
    const time = totalDuration() * Number(seek.value) / 100;
    progress.style.width = `${seek.value}%`;
    clock.innerHTML = `${formatTime(time)} <i>/</i> ${formatTime(totalDuration())}`;
  });
  seek.addEventListener('change', () => {
    seekToGlobalTime(totalDuration() * Number(seek.value) / 100, parts.some(audio => !audio.paused));
    seeking = false;
  });
  nav.addEventListener('click', event => {
    const link = event.target.closest('[data-jump-scene]');
    if (link) { event.preventDefault(); playScene(link.dataset.jumpScene); }
  });
  storyList.addEventListener('click', event => {
    const button = event.target.closest('[data-scene-play]');
    if (button) playScene(button.dataset.scenePlay);
    const zoom = event.target.closest('[data-zoom]');
    if (zoom) {
      const img = document.getElementById('dialogImage');
      img.src = zoom.dataset.zoom;
      img.alt = zoom.dataset.alt;
      document.getElementById('imageDialog').hidden = false;
      document.body.classList.add('dialog-open');
      document.getElementById('dialogClose').focus();
    }
  });
  if (document.body.classList.contains('guide-page')) {
    const helperToggle = document.getElementById('helperToggle');
    const helperPanel = document.getElementById('helperPanel');
    const helperMessages = document.getElementById('helperMessages');
    const helperChoices = document.getElementById('helperChoices');
    const helperClose = document.getElementById('helperClose');
    const helpTopics = data.sections.filter(section => section.steps?.length && section.showCard !== false);
    helperChoices.innerHTML = helpTopics.map(section => `<button type="button" data-help-scene="${section.index}">${section.navTitle || section.title}</button>`).join('');
    const setHelper = open => {
      helperPanel.hidden = !open;
      helperToggle.setAttribute('aria-expanded', String(open));
      helperToggle.querySelector('i').textContent = open ? '×' : '+';
      if (open) helperChoices.querySelector('button')?.focus(); else helperToggle.focus();
    };
    helperToggle.addEventListener('click', () => setHelper(helperPanel.hidden));
    helperClose.addEventListener('click', () => setHelper(false));
    helperChoices.addEventListener('click', event => {
      const button = event.target.closest('[data-help-scene]');
      if (!button) return;
      const section = data.sections.find(item => item.index === Number(button.dataset.helpScene));
      if (!section) return;
      pauseAll();
      helperMessages.innerHTML = `<p class="helper-you">${section.navTitle || section.title}</p><p class="helper-message"><strong>${section.title}</strong></p><ol>${section.steps.map(step => `<li>${step}</li>`).join('')}</ol>`;
      setScene(section.index, { scroll: true, force: true });
    });
  }
  document.getElementById('dialogClose').addEventListener('click', closeDialog);
  document.getElementById('imageDialog').addEventListener('click', event => { if (event.target.id === 'imageDialog') closeDialog(); });
  function closeDialog() { document.getElementById('imageDialog').hidden = true; document.body.classList.remove('dialog-open'); }
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeDialog(); });
  captionToggle.addEventListener('click', () => {
    const on = captionToggle.getAttribute('aria-pressed') !== 'true';
    captionToggle.setAttribute('aria-pressed', String(on));
    captionToggle.classList.toggle('is-on', on);
    captionToggle.setAttribute('aria-label', on ? 'Turn captions off' : 'Turn captions on');
    document.body.classList.toggle('captions-off', !on);
  });

  const observer = new IntersectionObserver(entries => {
    if (parts.some(audio => !audio.paused)) return;
    const candidate = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (candidate) setScene(candidate.target.dataset.sceneIndex);
  }, { rootMargin: '-20% 0px -45% 0px', threshold: [0.15, 0.35, 0.6] });
  document.querySelectorAll('[data-scene-index]').forEach(scene => observer.observe(scene));
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && parts[activePart]) saveProgress(activePart, parts[activePart].currentTime || 0, false, true);
  });
  window.addEventListener('scroll', () => {
    if (parts[activePart]) saveProgress(activePart, parts[activePart].currentTime || 0);
  }, { passive: true });
  window.addEventListener('beforeunload', () => {
    if (parts[activePart]) saveProgress(activePart, parts[activePart].currentTime || 0, false, true);
  });
})();
