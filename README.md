# Axis Bank New Joiner Induction

Two-page, scrolling induction website for new Axis Bank employees.

## Pages

- `index.html` — cinematic induction story with the supplied two-part narration, scene transitions, sentence captions, chapter seeking, and saved playback position.
- `one-axis.html` — introductory One Axis narration followed immediately by Intune work-profile setup, registration, account recovery, app areas, attendance, and policy guidance. Narration scrolls the page to each chapter; recreated phone mockups highlight the current action.

## Audio and script source

The narration and matching scripts are in `voice and script/`. The supplied audio files have WAV data despite their `.mp3` extensions; website copies are named `.wav` in `assets/`. Until exact voice timings are supplied, scene and sentence cues are estimated from script word counts and recording duration. Use `AUDIO_TIMESTAMPS.md` to provide exact scene boundaries and One Axis phone action times; playback progress is saved separately for each page.

The One Axis page recreates the phone screens as HTML/CSS elements so narration can highlight individual actions. The source screenshots remain read-only references and are not displayed in the guide.

## Preview

Open `index.html` in a modern browser and use the navigation to move between the two pages. No framework build step is required.
