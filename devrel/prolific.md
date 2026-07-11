---
layout: base
title: Developer Relations at Prolific
subtitle: Building Prolific's DevRel function from the ground up
meta-title: Viviana Márquez | Prolific DevRel Record
meta-description: "A reference page listing Viviana Márquez's Developer Relations work at Prolific across open source, events, content, speaking, internal enablement, and GTM support."
meta-keywords: "Viviana Márquez, Prolific, Developer Relations, DevRel, AI community, AI events, open source, human feedback, RLHF, AI evaluation, AI Task Builder, technical content, developer advocacy"
share-img: "https://vivianamarquez.com/devrel/assets/viviana-marquez-prolificon-speaking-onstage.jpg"
---

<style>
  :root {
    --record-ink: #1f1930;
    --record-muted: #51495f;
    --record-line: rgba(31, 25, 48, 0.17);
    --record-paper: #fffaf7;
    --record-panel: #ffffff;
    --record-tint: #f5eee9;
    --record-accent: #9b2f6d;
    --record-accent-soft: rgba(155, 47, 109, 0.1);
  }

  body {
    background: var(--record-paper);
  }

  .prolific-record {
    color: var(--record-ink);
    font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
    padding: 116px 18px 72px;
  }

  .record-wrap {
    width: min(1120px, 100%);
    margin: 0 auto;
  }

  .record-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 270px;
    gap: 16px;
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--record-line);
  }

  .record-kicker {
    margin: 0 0 12px;
    color: var(--record-accent);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .record-hero h1 {
    margin: 0;
    max-width: 820px;
    font-size: clamp(34px, 5.6vw, 62px);
    line-height: 1.06;
    letter-spacing: 0;
    font-weight: 600;
  }

  .record-summary {
    margin: 20px 0 0;
    max-width: 720px;
    color: var(--record-muted);
    font-size: 18px;
    line-height: 1.55;
  }

  .record-summary strong {
    color: var(--record-ink);
    font-weight: 700;
  }

  .record-portrait {
    aspect-ratio: 1;
    overflow: hidden;
    border: 1px solid var(--record-line);
    border-radius: 8px;
    background: var(--record-tint);
  }

  .record-portrait img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 54% center;
    display: block;
  }

  .record-carousel {
    margin: 18px 0 22px;
  }

  .record-carousel-track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(250px, 33%);
    gap: 10px;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    padding: 0 0 10px;
    scrollbar-width: thin;
  }

  .record-slide {
    position: relative;
    height: 210px;
    overflow: hidden;
    border-radius: 8px;
    background: var(--record-tint);
    border: 1px solid var(--record-line);
    scroll-snap-align: start;
  }

  .record-slide.tall {
    height: 210px;
  }

  .record-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 54% center;
    display: block;
  }

  .record-slide.focus-speakers img {
    width: 122%;
    max-width: none;
    object-position: 68% center;
    transform: translateX(-18%);
  }

  .record-stats {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
    margin: 18px 0 10px;
  }

  .record-stat {
    display: block;
    padding: 12px 13px;
    background: var(--record-panel);
    border: 1px solid var(--record-line);
    border-radius: 8px;
    color: inherit;
    text-decoration: none;
  }

  .record-stat strong {
    display: block;
    margin-bottom: 4px;
    font-size: 24px;
    line-height: 1;
    font-weight: 600;
  }

  .record-stat span {
    color: var(--record-accent);
    font-size: 13px;
    line-height: 1.35;
  }

  .record-stat a {
    color: var(--record-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .record-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 28px 0 44px;
  }

  .record-nav-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    padding: 9px;
    background: var(--record-accent-soft);
    border: 1px solid rgba(155, 47, 109, 0.16);
    border-radius: 8px;
  }

  .record-nav-label {
    padding: 0 4px;
    color: var(--record-accent);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .record-nav a {
    padding: 8px 10px;
    color: var(--record-ink);
    background: var(--record-panel);
    border: 1px solid var(--record-line);
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
  }

  .record-nav a:hover,
  .record-nav a:focus {
    color: var(--record-accent);
    border-color: rgba(155, 47, 109, 0.34);
  }

  .record-section {
    scroll-margin-top: 96px;
    margin-top: 42px;
    padding: 22px 22px 16px;
    background: var(--record-panel);
    border: 1px solid var(--record-line);
    border-radius: 8px;
  }

  .record-divider {
    margin: 50px 0 -22px;
  }

  .record-divider h2 {
    display: inline-block;
    margin: 0;
    padding: 5px 10px;
    color: var(--record-accent);
    background: var(--record-accent-soft);
    border-radius: 6px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .record-section.compact {
    background: transparent;
    padding: 0;
    border: 0;
  }

  .record-section h2 {
    margin: 0 0 8px;
    font-size: 25px;
    line-height: 1.15;
    letter-spacing: 0;
    font-weight: 600;
  }

  .record-note {
    margin: 0 0 20px;
    color: var(--record-accent);
    font-size: 15px;
    line-height: 1.55;
  }

  .record-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .record-list.grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 22px;
  }

  .record-list.grid li:nth-child(1),
  .record-list.grid li:nth-child(2) {
    border-top: 0;
  }

  .record-list.grid li.record-full {
    grid-column: 1 / -1;
  }

  .record-list.grid-five {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 0 18px;
  }

  .record-list.grid-five li {
    border-top: 0;
  }

  .record-list.grid-five li + li {
    border-left: 1px solid var(--record-line);
    padding-left: 14px;
  }

  .record-list.grid-five .record-item-title {
    font-size: 15px;
    line-height: 1.35;
  }

  .record-list li {
    padding: 13px 0;
    border-top: 1px solid var(--record-line);
  }

  .record-list li:first-child {
    border-top: 0;
  }

  .record-list li:last-child {
    padding-bottom: 0;
  }

  .record-list.grid li:nth-last-child(-n + 2),
  .record-list.grid-five li {
    padding-bottom: 0;
  }

  .record-item-title {
    margin: 0 0 5px;
    min-width: 0;
    font-size: 17px;
    line-height: 1.5;
    font-weight: 600;
  }

  .record-item-desc {
    margin: 0 0 6px;
    color: var(--record-muted);
    font-size: 14px;
    line-height: 1.5;
  }

  .record-item-meta {
    margin: 0;
    color: var(--record-muted);
    font-size: 13px;
    line-height: 1.45;
  }

  .record-item-title a,
  .record-item-meta a,
  .record-item-desc a {
    color: var(--record-accent);
    text-decoration: none;
    border-bottom: 1px solid rgba(155, 47, 109, 0.28);
  }

  .record-item-title a:hover,
  .record-item-title a:focus,
  .record-item-meta a:hover,
  .record-item-meta a:focus,
  .record-item-desc a:hover,
  .record-item-desc a:focus {
    border-color: currentColor;
  }

  .record-subhead {
    display: inline-block;
    margin: 24px 0 4px;
    padding: 5px 9px;
    color: var(--record-accent);
    background: var(--record-accent-soft);
    border: 1px solid rgba(155, 47, 109, 0.16);
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .record-note + .record-subhead {
    margin-top: 4px;
  }

  .record-inline-list {
    margin: 12px 0 0;
    color: var(--record-muted);
    font-size: 14px;
    line-height: 1.7;
  }

  .record-inline-list span {
    color: var(--record-ink);
  }

  .record-inline-list span + span:before {
    content: " | ";
    color: var(--record-muted);
  }

  .record-sublist {
    margin: 8px 0 0;
    padding-left: 18px;
    color: var(--record-muted);
    font-size: 14px;
  }

  .record-tag {
    display: inline-block;
    margin-left: 6px;
    padding: 2px 7px;
    color: var(--record-accent);
    background: var(--record-accent-soft);
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    vertical-align: 1px;
  }

  .record-media-item {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 178px;
    gap: 18px;
    align-items: center;
  }

  .record-media-thumb {
    margin: 0;
  }

  .record-lightbox-trigger {
    display: block;
    width: 100%;
    padding: 0;
    background: transparent;
    border: 0;
    cursor: zoom-in;
  }

  .record-media-thumb img {
    display: block;
    width: 100%;
    border: 1px solid var(--record-line);
    border-radius: 8px;
    background: var(--record-tint);
  }

  .record-lightbox-trigger:hover img,
  .record-lightbox-trigger:focus img {
    border-color: rgba(155, 47, 109, 0.5);
  }

  .record-lightbox {
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(14, 11, 24, 0.78);
  }

  .record-lightbox.is-open {
    display: flex;
  }

  .record-lightbox-panel {
    position: relative;
    width: min(800px, 100%);
    max-height: 90vh;
    padding: 14px;
    background: #ffffff;
    border-radius: 10px;
  }

  .record-lightbox-panel img {
    display: block;
    width: 100%;
    max-height: calc(90vh - 28px);
    object-fit: contain;
    border-radius: 6px;
    background: var(--record-panel);
  }

  .record-lightbox-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 34px;
    height: 34px;
    padding: 0;
    color: var(--record-ink);
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid var(--record-line);
    border-radius: 999px;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
  }

  .record-lightbox-close:hover,
  .record-lightbox-close:focus {
    color: var(--record-accent);
  }

  @media (max-width: 820px) {
    .prolific-record {
      padding-top: 92px;
    }

    .record-stats {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .record-nav {
      display: grid;
      grid-template-columns: 1fr;
    }

    .record-list.grid,
    .record-list.grid-five {
      grid-template-columns: 1fr;
    }

    .record-list.grid li:nth-child(2) {
      border-top: 1px solid var(--record-line);
    }

    .record-list.grid-five li + li {
      border-left: 0;
      border-top: 1px solid var(--record-line);
    }

    .record-hero {
      grid-template-columns: 1fr;
    }

    .record-portrait {
      width: 190px;
    }

    .record-carousel-track {
      grid-auto-columns: minmax(230px, 72%);
    }

    .record-media-item {
      grid-template-columns: 1fr;
    }

    .record-media-thumb {
      max-width: 220px;
    }
  }

  @media (max-width: 520px) {
    .record-section {
      padding: 20px 20px 15px;
    }

    .record-stats {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 360px) {
    /* Keep the carousel tidy on the smallest phone screens. */
    .record-carousel-track {
      grid-auto-columns: 100%;
    }
  }
</style>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "Developer Relations at Prolific",
  "description": "A reference record of Viviana Márquez's Developer Relations work at Prolific from June 2025 to July 2026 across open source, AI community events, technical content, speaking, internal enablement, and GTM support.",
  "url": "https://vivianamarquez.com/devrel/prolific/",
  "image": "https://vivianamarquez.com/devrel/assets/viviana-marquez-prolificon-speaking-onstage.jpg",
  "about": {
    "@type": "Person",
    "name": "Viviana Márquez",
    "jobTitle": "Developer Relations Engineer",
    "url": "https://vivianamarquez.com",
    "sameAs": [
      "https://www.linkedin.com/in/vivianamarquez/",
      "https://github.com/vivianamarquez"
    ]
  },
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "Prolific Developer Relations record",
    "keywords": [
      "Developer Relations",
      "Prolific",
      "AI community",
      "Open source",
      "Human feedback",
      "AI evaluation",
      "Technical content"
    ]
  }
}
</script>

<main class="prolific-record">
  <div class="record-wrap">
    <header class="record-hero">
      <div>
        <p class="record-kicker">June 2025 - July 2026</p>
        <h1>Developer Relations<br>at Prolific</h1>
        <p class="record-summary">Built Prolific's developer relations function from the ground up, spanning technical content, community, open source, events, internal enablement, and GTM support. This work was recognized with the <strong>"We Embrace Change" award</strong> for driving transformative change and shaping Prolific's direction.</p>
      </div>
      <div class="record-portrait">
        <img src="/devrel/assets/viviana-marquez-prolificon-speaking-onstage.jpg" alt="Viviana Marquez speaking onstage at Prolific">
      </div>
    </header>

    <section class="record-carousel" aria-label="Photo highlights">
      <div class="record-carousel-track">
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolificon-ai-community-audience.jpg" alt="Viviana Marquez speaking to a Prolific AI community audience"></div>
        <div class="record-slide focus-speakers"><img src="/devrel/assets/viviana-marquez-prolific-ai-meetup-panel-speaker.jpg" alt="Viviana Marquez on a Prolific AI meetup panel"></div>
        <div class="record-slide"><img src="/devrel/assets/prolific-ai-meetup-community-audience.jpg" alt="Prolific AI meetup audience"></div>
        <div class="record-slide tall"><img src="/devrel/assets/viviana-marquez-humanx-agentic-ai-podcast-interview.jpg" alt="Viviana Marquez recording an agentic AI podcast interview"></div>
        <div class="record-slide"><img src="/devrel/assets/prolific-ai-hackathon-demo-station.jpg" alt="Prolific AI hackathon demo station"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-ai-dev-25-nyc-team.jpg" alt="Viviana Marquez with Prolific team at AI Dev 25 NYC"></div>
        <div class="record-slide tall"><img src="/devrel/assets/viviana-marquez-prolific-ai-conference-booth-conversation.jpg" alt="Viviana Marquez in a Prolific AI conference booth conversation"></div>
        <div class="record-slide tall"><img src="/devrel/assets/viviana-marquez-prolific-ai-conference-booth-demo.jpg" alt="Viviana Marquez giving a Prolific AI conference booth demo"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-ai-conference-booth-team.jpg" alt="Viviana Marquez with Prolific booth team at AI conference"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-frontier-ai-evals-panel.jpg" alt="Viviana Marquez on Frontier AI Evals panel"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-we-embrace-change-award.jpg" alt="Viviana Marquez receiving Prolific We Embrace Change award"></div>
      </div>
    </section>

    <section class="record-stats" aria-label="Highlights">
      <div class="record-stat"><strong>0 &rarr; 1</strong><span>DevRel function</span></div>
      <div class="record-stat"><strong>12+</strong><span>Open-source repos</span></div>
      <div class="record-stat"><strong>+15</strong><span>Events</span></div>
      <div class="record-stat"><strong>39k &rarr; 175k</strong><span><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/prolific-com/">LinkedIn</a> audience</span></div>
      <div class="record-stat"><strong>0 &rarr; ~2k</strong><span><a target="_blank" rel="noopener noreferrer" href="https://luma.com/prolific?period=past">Luma</a> followers</span></div>
    </section>

    <nav class="record-nav" aria-label="Page sections">
      <div class="record-nav-group">
        <span class="record-nav-label">Content</span>
        <a href="#open-source">Open Source</a>
        <a href="#content">Videos</a>
        <a href="#podcast">Podcast</a>
        <a href="#blogs">Blogs</a>
      </div>
      <div class="record-nav-group">
        <span class="record-nav-label">Events</span>
        <a href="#meetups">Meetups</a>
        <a href="#conferences">Conferences</a>
        <a href="#hackathons">Hackathons</a>
        <a href="#speaking">Speaking</a>
      </div>
      <div class="record-nav-group">
        <span class="record-nav-label">Misc</span>
        <a href="#misc">Misc</a>
      </div>
    </nav>

    <div class="record-divider" aria-hidden="true">
      <h2>Content</h2>
    </div>

    <section class="record-section" id="open-source">
      <h2>GitHub Open-Source Repos</h2>
      <p class="record-note">Public examples, demos, templates, and developer-facing workflows.</p>
      <ul class="record-list grid">
        <li><p class="record-item-title">Post-training with Prolific</p><p class="record-item-desc">Reference workflow showing how to use Prolific with Tinker to collect human feedback for post-training pipelines, including SFT and DPO.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/hitl-llm-post-training">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific Smart Glasses POV Video Collection</p><p class="record-item-desc">Video collection workflow for embodied AI and POV data collection.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/prolific-smart-glasses-pov-video-collection">GitHub repo</a></p></li>
        <li><p class="record-item-title">CLI <span class="record-tag">contributed</span></p><p class="record-item-desc">Developer and agentic tooling and setup path for working with Prolific from the command line.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/cli">GitHub repo</a></p></li>
        <li><p class="record-item-title">Skills <span class="record-tag">contributed</span></p><p class="record-item-desc">Developer tooling for using Prolific through Skills, a portable format for packaging repeatable agentic coding and task automation workflows.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/skills">GitHub repo</a></p></li>
        <li><p class="record-item-title">Free Text Collection</p><p class="record-item-desc">AI Task Builder template for collecting open-ended text responses.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/AI-Task-Builder-Free-Text-Collection">GitHub repo</a></p></li>
        <li><p class="record-item-title">Image Collection <span class="record-tag">contributed</span></p><p class="record-item-desc">AI Task Builder template for collecting image responses.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/AI-Task-Builder-Image-Collection">GitHub repo</a></p></li>
        <li><p class="record-item-title">RLHF Data Collection Pipeline</p><p class="record-item-desc">Pipeline for collecting human feedback and preference data.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/rlhf_data_collection_pipeline_aitb">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific Secured External URL</p><p class="record-item-desc">Demo showing how to send Prolific participants to an external data collection platform securely, while preserving participant validation and study control.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/prolific-secure-links-demo">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific External Study Link</p><p class="record-item-desc">Getting-started guide for running Prolific studies on external tools, so researchers can collect data outside Prolific while still recruiting Prolific participants.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/prolific-external-study-link-getting-started">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific's AI Task Builder</p><p class="record-item-desc">Introductory guide for using Prolific's AI Task Builder feature.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/prolific-ai-task-builder-getting-started">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific Survey</p><p class="record-item-desc">Getting-started survey template for collecting structured responses from Prolific participants.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/prolific-survey-getting-started">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific OSS organization README</p><p class="record-item-desc">Created the GitHub organization description README for Prolific's open-source presence.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://github.com/prolific-oss/">GitHub org</a></p></li>
        <li class="record-full"><p class="record-item-title">Among Bots demo</p><p class="record-item-desc">🔗 <a target="_blank" rel="noopener noreferrer" href="https://deliberate-lab.appspot.com/">Deliberate Labs</a> is a social research platform from Google DeepMind's PAIR Lab. I ran an Among Bots game as a live demo for research scientists, where Prolific participants tried to detect the LLM and showcased how human participants can power interactive social research experiences.</p></li>
      </ul>
    </section>

    <section class="record-section" id="content">
      <h2>Videos</h2>
      <p class="record-note">Videos were handled end-to-end: scripting, filming, editing, and publishing.</p>
      <ul class="record-list grid">
        <li><p class="record-item-title">How to Post-Train an LLM: SFT, DPO, Human Feedback with Prolific</p><p class="record-item-desc">Technical walkthrough connecting supervised fine-tuning, preference optimization, and human feedback workflows to Prolific.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=vh6jUmuXLhU">YouTube</a></p></li>
        <li><p class="record-item-title">How to Install Prolific's CLI Using GitHub</p><p class="record-item-desc">Setup-oriented developer tutorial for getting started with Prolific's command-line tooling.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=rUCeI8Yv__g">YouTube</a></p></li>
        <li class="record-full"><p class="record-item-title">Collect real first-person video data for AI using Prolific</p><p class="record-item-desc">Video walkthrough for collecting first-person video data for AI workflows with Prolific.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/feed/update/urn:li:activity:7478626255219621888">LinkedIn</a></p></li>
      </ul>
    </section>

    <section class="record-section" id="podcast">
      <h2>Podcast</h2>
      <ul class="record-list">
        <li><p class="record-item-title">Can Digital Twins Evaluate Agentic AI?</p><p class="record-item-desc">Conversation with Dr. Dakuo Wang on digital twins, agentic AI, and evaluation.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=-zm3ZPLUsCA">YouTube</a></p></li>
        <li><p class="record-item-title">Humans as AI Managers: Our Evolving Role in the Era of Experience</p><p class="record-item-desc">Conversation with Dr. Bo Wen on how human roles shift as AI systems become more capable and experience-driven.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://lnkd.in/edPPFTMJ">LinkedIn</a></p></li>
      </ul>
    </section>

    <section class="record-section" id="blogs">
      <h2>Blog Posts</h2>
      <ul class="record-list">
        <li><p class="record-item-title">When does autoresearch need a human? <span class="record-tag">co-authored</span></p><p class="record-item-desc">Explores when automated research workflows still need human judgment, oversight, and evaluation.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://huggingface.co/blog/ProlificAI/autoresearch-hitl-experiment">Hugging Face</a></p></li>
        <li><p class="record-item-title">How the best AI teams evaluate at speed: Lessons from Microsoft, Amazon, and Braintrust</p><p class="record-item-desc">Recap and synthesis of how AI teams approach evaluation workflows at speed.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://www.prolific.com/resources/how-the-best-ai-teams-evaluate-at-speed-lessons-from-microsoft-amazon-and-braintrust">Prolific</a></p></li>
        <li><p class="record-item-title">Your AI agent is optimized to finish. That's not always what you need <span class="record-tag">co-authored</span></p><p class="record-item-desc">Argues for human judgment and task design when agents optimize for completion over quality.</p><p class="record-item-meta">🔗 <a target="_blank" rel="noopener noreferrer" href="https://www.humanx.co/us/blog/your-ai-agent-is-optimized-to-finish">HumanX</a></p></li>
      </ul>
    </section>

    <div class="record-divider" aria-hidden="true">
      <h2>Events</h2>
    </div>

    <section class="record-section" id="meetups">
      <h2>Meetups</h2>
      <p class="record-note">End-to-end: logistics, speaker outreach, marketing, hosting, and GTM lead handoff.</p>
      <ul class="record-list grid">
        <li><p class="record-item-title">Operationalizing Agents | Prolific x AI Circle</p><p class="record-item-desc">Featuring researchers from Google Research, Google DeepMind, and Snowflake.</p><p class="record-item-meta">📍 San Francisco · 🗓️ May 2026 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://luma.com/2x62tiuu">Luma</a></p></li>
        <li><p class="record-item-title">Frontier Evals | Prolific x AI Circle</p><p class="record-item-desc">Featuring researchers from Amazon, Braintrust, and Microsoft.</p><p class="record-item-meta">📍 Seattle · 🗓️ May 2026 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://luma.com/ljfk2sxn">Luma</a></p></li>
        <li><p class="record-item-title">Frontier Evals | Prolific x AI Circle</p><p class="record-item-desc">Featuring researchers from Google DeepMind, Cohere, and LinkedIn.</p><p class="record-item-meta">📍 New York · 🗓️ Mar 2026 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://luma.com/0qusb8j8">Luma</a></p></li>
        <li><p class="record-item-title">What 25,000 Humans Really Think About AI | Prolific</p><p class="record-item-desc">Featuring researchers from Prolific.</p><p class="record-item-meta">📍 San Francisco · 🗓️ Dec 2025 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://luma.com/0zbx2brz">Luma</a></p></li>
        <li><p class="record-item-title">Beyond the Benchmark | Prolific</p><p class="record-item-desc">Featuring researchers from Inflection AI.</p><p class="record-item-meta">📍 San Francisco · 🗓️ Nov 2025 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://luma.com/772frd2b">Luma</a></p></li>
        <li><p class="record-item-title">Researchers Building Real-World AI Tooling | Prolific</p><p class="record-item-desc">Featuring researchers from Prolific, USF, and Stanford.</p><p class="record-item-meta">📍 San Francisco · 🗓️ Sep 2025 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://luma.com/tyue3bfq">Luma</a></p></li>
        <li class="record-full"><p class="record-item-title">Strategic dinner events</p><p class="record-item-desc">Relationship-building dinners for AI and research audiences.</p><p class="record-item-meta">📍 San Francisco, New York, Seattle · 🗓️ 2025 - 2026</p></li>
      </ul>
    </section>

    <section class="record-section" id="conferences">
      <h2>Conferences</h2>
      <p class="record-note">Lead conferences included logistics, contract, marketing, booth, and GTM lead handoff.</p>
      <h3 class="record-subhead">Lead</h3>
      <ul class="record-list">
        <li><p class="record-item-title">AI Developer Conference by DeepLearning.AI</p><p class="record-item-meta">📍 San Francisco · 🗓️ Apr 2026 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/prolific-com_meet-us-at-ai-dev-conf-x-sf-prolific-ugcPost-7455300072084488192-OgHj">LinkedIn</a></p></li>
        <li><p class="record-item-title">AI Developer Conference by DeepLearning.AI</p><p class="record-item-meta">📍 New York · 🗓️ Nov 2025</p></li>
      </ul>
      <h3 class="record-subhead">Support</h3>
      <ul class="record-list grid-five">
        <li><p class="record-item-title">AI Engineer World's Fair</p><p class="record-item-meta">📍 San Francisco<br>🗓️ Jul 2026</p></li>
        <li><p class="record-item-title">London Tech Week</p><p class="record-item-meta">📍 London<br>🗓️ Jun 2026</p></li>
        <li><p class="record-item-title">ICLR</p><p class="record-item-meta">📍 Rio de Janeiro<br>🗓️ Apr 2026</p></li>
        <li><p class="record-item-title">Human X</p><p class="record-item-meta">📍 San Francisco<br>🗓️ Apr 2026</p></li>
        <li><p class="record-item-title">AI Engine Summer Hack</p><p class="record-item-meta">📍 London<br>🗓️ Aug 2025</p></li>
      </ul>
    </section>

    <section class="record-section" id="hackathons">
      <h2>Hackathons</h2>
      <ul class="record-list">
        <li><p class="record-item-title">UC Berkeley EMBA students x USF MSDS students</p><p class="record-item-meta">📍 San Francisco · 🗓️ Jun 2026 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/tmrh_sf-prolific-rossgeller-activity-7474091193195270144-pidA">LinkedIn</a></p></li>
        <li><p class="record-item-title">Memories.ai Hackathon partnership</p><p class="record-item-meta">📍 London &amp; San Francisco · 🗓️ Sep - Oct 2025 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://luma.com/iu37305e">London Luma</a> · <a target="_blank" rel="noopener noreferrer" href="https://luma.com/fqne87rp">San Francisco Luma</a></p></li>
      </ul>
    </section>

    <section class="record-section" id="speaking">
      <h2>Guest Speaker Engagements Representing Prolific</h2>
      <ul class="record-list grid">
        <li><p class="record-item-title">AJCU Provosts AI Leadership Summit</p><p class="record-item-meta">📍 San Francisco · 🗓️ Jun 2026 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://www.usfca.edu/news/usf-leads-ai-summit">USF</a></p></li>
        <li><p class="record-item-title">USF Alumni Panel at the Data Science Conference</p><p class="record-item-meta">📍 San Francisco · 🗓️ Jun 2026</p></li>
        <li><p class="record-item-title">PyLadies SF</p><p class="record-item-meta">📍 San Francisco · 🗓️ Apr 2026 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://luma.com/z9px4nbg">Luma</a></p></li>
        <li><p class="record-item-title">Write the Docs Bay Area</p><p class="record-item-meta">📍 San Francisco · 🗓️ Jan 2026 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://luma.com/1k8djkt9">Luma</a></p></li>
        <li><p class="record-item-title">Data Science Speaker Series</p><p class="record-item-meta">📍 San Francisco · 🗓️ Sep 2025 · 🔗 <a target="_blank" rel="noopener noreferrer" href="https://www.meetup.com/usf-data-science-and-ai-speaker-series/events/310636474/">Meetup</a> · <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=i8SrA77OtcY">YouTube</a></p></li>
        <li><p class="record-item-title">MSRI-UP Alumni Panel at the Simons Laufer Mathematical Sciences Institute UC Berkeley</p><p class="record-item-meta">📍 Berkeley · 🗓️ Jul 2025</p></li>
      </ul>
    </section>

    <div class="record-divider" aria-hidden="true">
      <h2>Misc</h2>
    </div>

    <section class="record-section" id="misc">
      <h2>Misc</h2>
      <ul class="record-list">
        <li><p class="record-item-title">Internal enablement</p><p class="record-item-desc">Led internal AI education and enablement, teaching teams core AI concepts, how to demo Prolific, and how to position it within post-training, evals, and modern AI workflows.</p></li>
        <li><p class="record-item-title">Audience growth</p><p class="record-item-desc">Supported audience growth across Prolific's community channels, including Luma 0 &rarr; ~2k followers and LinkedIn 39k &rarr; 175k.</p></li>
        <li class="record-media-item"><div><p class="record-item-title">Swag support</p><p class="record-item-desc">Managed event swag and co-created audience-aware stickers with our graphic designer, including concepts for AI evals engineers and developers building with APIs.</p></div><figure class="record-media-thumb"><button class="record-lightbox-trigger" type="button" data-lightbox-src="/devrel/assets/prolific-devrel-swag-stickers-final.png" aria-label="View swag sticker image"><img src="/devrel/assets/prolific-devrel-swag-stickers-thumb.jpg" alt="Stickers co-created for AI engineers and developers building with APIs"></button></figure></li>
      </ul>
    </section>

  </div>
</main>

<div class="record-lightbox" id="record-lightbox" aria-hidden="true" role="dialog" aria-modal="true">
  <div class="record-lightbox-panel">
    <button class="record-lightbox-close" type="button" aria-label="Close image preview">&times;</button>
    <img src="" alt="">
  </div>
</div>

<script>
  (function() {
    var lightbox = document.getElementById("record-lightbox");
    if (!lightbox) return;

    var image = lightbox.querySelector("img");
    var closeButton = lightbox.querySelector(".record-lightbox-close");
    var lastTrigger = null;

    function openLightbox(trigger) {
      lastTrigger = trigger;
      image.src = trigger.getAttribute("data-lightbox-src");
      image.alt = trigger.querySelector("img").alt;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      closeButton.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      image.src = "";
      if (lastTrigger) lastTrigger.focus();
    }

    document.querySelectorAll(".record-lightbox-trigger").forEach(function(trigger) {
      trigger.addEventListener("click", function() {
        openLightbox(trigger);
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function(event) {
      if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  })();
</script>
