---
layout: base
title: Developer Relations at Prolific
subtitle: Building Prolific's DevRel function from the ground up
meta-title: Viviana Marquez | Prolific DevRel Record
meta-description: "A portfolio case study of Viviana Marquez's Developer Relations work at Prolific across open source, community, events, content, internal enablement, and GTM."
---

<style>
  :root {
    --prolific-ink: #1b1724;
    --prolific-muted: #665f73;
    --prolific-rose: #cf4f8b;
    --prolific-coral: #f2765f;
    --prolific-gold: #f6b84b;
    --prolific-mint: #61b99c;
    --prolific-sky: #4f8fcb;
    --prolific-paper: #fffaf6;
    --prolific-line: rgba(27, 23, 36, 0.14);
    --prolific-shadow: 0 22px 60px rgba(31, 23, 43, 0.14);
  }

  body {
    background: #fffaf6;
  }

  .prolific-page {
    color: var(--prolific-ink);
    font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
    overflow: hidden;
  }

  .prolific-page a {
    color: #8b2361;
    text-decoration: none;
    border-bottom: 1px solid rgba(139, 35, 97, 0.32);
    transition: color 160ms ease, border-color 160ms ease, background 160ms ease;
  }

  .prolific-page a:hover,
  .prolific-page a:focus {
    color: #5f1642;
    border-color: currentColor;
  }

  .prolific-hero {
    position: relative;
    min-height: 92vh;
    display: flex;
    align-items: flex-end;
    padding: 150px 22px 72px;
    background:
      linear-gradient(115deg, rgba(19, 14, 29, 0.88) 0%, rgba(40, 24, 52, 0.75) 42%, rgba(42, 31, 47, 0.18) 100%),
      url("/devrel/assets/viviana-marquez-prolificon-speaking-onstage.jpg") center / cover no-repeat;
  }

  .prolific-hero:after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 28vh;
    background: linear-gradient(180deg, rgba(255, 250, 246, 0), var(--prolific-paper));
    pointer-events: none;
  }

  .prolific-hero-inner {
    position: relative;
    z-index: 1;
    width: min(1120px, 100%);
    margin: 0 auto;
  }

  .prolific-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    color: #ffe5b9;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .prolific-kicker:before {
    content: "";
    width: 42px;
    height: 2px;
    background: var(--prolific-gold);
  }

  .prolific-hero h1 {
    max-width: 900px;
    margin: 0;
    color: #fff;
    font-size: clamp(44px, 7vw, 92px);
    line-height: 0.98;
    letter-spacing: 0;
  }

  .prolific-lede {
    max-width: 760px;
    margin: 28px 0 0;
    color: rgba(255, 255, 255, 0.88);
    font-size: clamp(18px, 2.1vw, 25px);
    line-height: 1.45;
  }

  .prolific-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 34px;
  }

  .prolific-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 13px 18px;
    border: 1px solid rgba(255, 255, 255, 0.32);
    background: rgba(255, 255, 255, 0.92);
    color: var(--prolific-ink) !important;
    font-weight: 800;
    border-radius: 6px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  }

  .prolific-button.secondary {
    background: rgba(255, 255, 255, 0.11);
    color: #fff !important;
  }

  .prolific-button:hover,
  .prolific-button:focus {
    transform: translateY(-1px);
  }

  .prolific-section {
    position: relative;
    padding: 74px 22px;
  }

  .prolific-section.alt {
    background: #f6efe9;
  }

  .prolific-wrap {
    width: min(1120px, 100%);
    margin: 0 auto;
  }

  .prolific-section-head {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(260px, 0.7fr);
    gap: 40px;
    align-items: end;
    margin-bottom: 34px;
  }

  .prolific-eyebrow {
    margin: 0 0 12px;
    color: #8b2361;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .prolific-section h2 {
    margin: 0;
    font-size: clamp(32px, 4.8vw, 58px);
    line-height: 1.04;
    letter-spacing: 0;
  }

  .prolific-section h3 {
    margin: 0 0 10px;
    font-size: 22px;
    line-height: 1.2;
    letter-spacing: 0;
  }

  .prolific-section p {
    margin: 0;
    color: var(--prolific-muted);
    line-height: 1.65;
  }

  .prolific-stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;
    margin-top: -42px;
    position: relative;
    z-index: 2;
  }

  .prolific-stat {
    min-height: 160px;
    padding: 24px;
    background: #fff;
    border: 1px solid var(--prolific-line);
    border-radius: 8px;
    box-shadow: var(--prolific-shadow);
  }

  .prolific-stat strong {
    display: block;
    margin-bottom: 10px;
    font-size: clamp(28px, 4vw, 46px);
    line-height: 1;
  }

  .prolific-stat span {
    color: var(--prolific-muted);
    font-size: 15px;
    line-height: 1.45;
  }

  .prolific-proof-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .prolific-gallery {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-auto-flow: dense;
    gap: 16px;
    margin-top: 22px;
  }

  .prolific-photo {
    position: relative;
    min-height: 260px;
    overflow: hidden;
    border-radius: 8px;
    background: #1b1724;
    box-shadow: var(--prolific-shadow);
  }

  .prolific-photo.featured {
    grid-column: span 4;
    grid-row: span 2;
    min-height: 536px;
  }

  .prolific-photo.wide {
    grid-column: span 3;
  }

  .prolific-photo.medium {
    grid-column: span 2;
  }

  .prolific-photo.tall {
    grid-column: span 2;
    grid-row: span 2;
    min-height: 536px;
  }

  .prolific-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .prolific-photo img {
    object-position: center;
  }

  .prolific-caption {
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 16px;
    padding: 11px 12px;
    color: #fff;
    background: rgba(27, 23, 36, 0.72);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 6px;
    font-size: 13px;
    font-weight: 800;
    line-height: 1.35;
  }

  .prolific-proof {
    min-height: 220px;
    padding: 26px;
    background: #fff;
    border: 1px solid var(--prolific-line);
    border-radius: 8px;
  }

  .prolific-proof:nth-child(2) {
    border-top: 5px solid var(--prolific-coral);
  }

  .prolific-proof:nth-child(3) {
    border-top: 5px solid var(--prolific-mint);
  }

  .prolific-proof:first-child {
    border-top: 5px solid var(--prolific-rose);
  }

  .prolific-repo-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .prolific-repo {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 138px;
    padding: 18px;
    background: #fff;
    border: 1px solid var(--prolific-line);
    border-radius: 8px;
  }

  .prolific-repo small,
  .prolific-meta,
  .prolific-tag {
    color: var(--prolific-muted);
    font-size: 13px;
    line-height: 1.45;
  }

  .prolific-repo a {
    width: fit-content;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.2;
  }

  .prolific-timeline {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .prolific-event {
    display: grid;
    grid-template-columns: 116px minmax(0, 1fr);
    min-height: 182px;
    background: #fff;
    border: 1px solid var(--prolific-line);
    border-radius: 8px;
    overflow: hidden;
  }

  .prolific-date {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px;
    background: var(--prolific-ink);
    color: #fff;
    font-weight: 800;
  }

  .prolific-date span:first-child {
    color: #ffd18e;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .prolific-date span:last-child {
    font-size: 24px;
    line-height: 1;
  }

  .prolific-event-body {
    padding: 20px;
  }

  .prolific-event-body p {
    margin-top: 8px;
    font-size: 15px;
  }

  .prolific-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .prolific-item {
    min-height: 126px;
    padding: 20px;
    background: #fff;
    border: 1px solid var(--prolific-line);
    border-radius: 8px;
  }

  .prolific-item h3 {
    font-size: 19px;
  }

  .prolific-feature-band {
    background: var(--prolific-ink);
    color: #fff;
  }

  .prolific-feature-band p,
  .prolific-feature-band .prolific-meta {
    color: rgba(255, 255, 255, 0.72);
  }

  .prolific-feature-band .prolific-eyebrow {
    color: #ffd18e;
  }

  .prolific-content-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .prolific-content {
    min-height: 245px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 8px;
  }

  .prolific-content a {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.35);
  }

  .prolific-content ul,
  .prolific-compact-list {
    list-style: none;
    margin: 18px 0 0;
    padding: 0;
  }

  .prolific-content li,
  .prolific-compact-list li {
    position: relative;
    margin: 0 0 14px;
    padding-left: 18px;
    line-height: 1.5;
  }

  .prolific-content li:before,
  .prolific-compact-list li:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.62em;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--prolific-gold);
  }

  .prolific-speaking {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 18px;
  }

  .prolific-panel {
    padding: 26px;
    background: #fff;
    border: 1px solid var(--prolific-line);
    border-radius: 8px;
  }

  .prolific-footer-cta {
    padding: 82px 22px 96px;
    background:
      linear-gradient(100deg, rgba(255, 250, 246, 0.94), rgba(255, 250, 246, 0.78)),
      url("/img/sfggb.jpg") center / cover no-repeat;
  }

  .prolific-footer-cta h2 {
    max-width: 850px;
    margin: 0 0 18px;
    font-size: clamp(34px, 5vw, 68px);
    line-height: 1.02;
  }

  .prolific-footer-cta p {
    max-width: 760px;
    color: var(--prolific-muted);
    font-size: 20px;
    line-height: 1.55;
  }

  @media (max-width: 980px) {
    .prolific-section-head,
    .prolific-speaking {
      grid-template-columns: 1fr;
    }

    .prolific-stats,
    .prolific-proof-grid,
    .prolific-gallery,
    .prolific-repo-grid,
    .prolific-content-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .prolific-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .prolific-photo.featured,
    .prolific-photo.wide,
    .prolific-photo.medium,
    .prolific-photo.tall {
      grid-column: span 1;
      grid-row: span 1;
      min-height: 300px;
    }
  }

  @media (max-width: 720px) {
    .prolific-hero {
      min-height: 86vh;
      padding: 118px 18px 56px;
      background-position: 61% center;
    }

    .prolific-hero-actions {
      flex-direction: column;
    }

    .prolific-button {
      width: 100%;
    }

    .prolific-section {
      padding: 56px 18px;
    }

    .prolific-stats,
    .prolific-proof-grid,
    .prolific-gallery,
    .prolific-repo-grid,
    .prolific-timeline,
    .prolific-list,
    .prolific-content-grid {
      grid-template-columns: 1fr;
    }

    .prolific-photo,
    .prolific-photo.featured,
    .prolific-photo.wide,
    .prolific-photo.medium,
    .prolific-photo.tall {
      min-height: 260px;
    }

    .prolific-event {
      grid-template-columns: 1fr;
    }

    .prolific-date {
      min-height: 92px;
      flex-direction: row;
      align-items: end;
    }
  }
</style>

<main class="prolific-page">
  <section class="prolific-hero" aria-labelledby="prolific-title">
    <div class="prolific-hero-inner">
      <div class="prolific-kicker">Developer Relations at Prolific</div>
      <h1 id="prolific-title">Built a DevRel function from zero into a visible AI community engine.</h1>
      <p class="prolific-lede">I helped shape Prolific's developer-facing motion across open source, community, events, technical content, internal enablement, and GTM support, earning the "We Embrace Change" award for defining the direction as the work evolved.</p>
      <div class="prolific-hero-actions" aria-label="Primary links">
        <a class="prolific-button" href="https://github.com/prolific-oss/">Open-source work</a>
        <a class="prolific-button secondary" href="#community">Community record</a>
      </div>
    </div>
  </section>

  <section class="prolific-section" aria-label="Highlights">
    <div class="prolific-wrap">
      <div class="prolific-stats">
        <div class="prolific-stat">
          <strong>0 &rarr; 1</strong>
          <span>DevRel function built from scratch across content, community, demos, events, and internal education.</span>
        </div>
        <div class="prolific-stat">
          <strong>12+</strong>
          <span>Public open-source repos created or contributed to for AI data collection, post-training, CLI, and study workflows.</span>
        </div>
        <div class="prolific-stat">
          <strong>2k</strong>
          <span>Luma community growth from zero to roughly two thousand followers through consistent event programming.</span>
        </div>
        <div class="prolific-stat">
          <strong>175k</strong>
          <span>LinkedIn audience growth supported while Prolific expanded its presence in frontier AI conversations.</span>
        </div>
      </div>
    </div>
  </section>

  <section class="prolific-section alt">
    <div class="prolific-wrap">
      <div class="prolific-section-head">
        <div>
          <p class="prolific-eyebrow">Scope</p>
          <h2>A full-stack DevRel operating system.</h2>
        </div>
        <p>I worked across the whole loop: turn product capabilities into usable examples, gather the right humans in the room, publish technical narratives, hand warm community signals to GTM, and teach internal teams how to explain Prolific inside modern AI workflows.</p>
      </div>
      <div class="prolific-proof-grid">
        <article class="prolific-proof">
          <h3>Technical proof</h3>
          <p>Built and contributed to public repos for post-training, AI Task Builder workflows, secure study links, CLI usage, surveys, and data collection pipelines.</p>
        </article>
        <article class="prolific-proof">
          <h3>Community momentum</h3>
          <p>Produced meetups, dinners, hackathons, and conference activations across San Francisco, New York, Seattle, London, and Rio.</p>
        </article>
        <article class="prolific-proof">
          <h3>Market education</h3>
          <p>Created videos, blogs, podcast episodes, talks, and internal AI enablement that connected human data to evals, agents, post-training, and AI research.</p>
        </article>
      </div>
      <div class="prolific-gallery" aria-label="Prolific event photos">
        <figure class="prolific-photo featured">
          <img src="/devrel/assets/viviana-marquez-prolificon-ai-community-audience.jpg" alt="Viviana Marquez speaking to a full Prolific AI community event audience">
          <figcaption class="prolific-caption">Hosting a full-room Prolific event for AI builders and researchers.</figcaption>
        </figure>
        <figure class="prolific-photo medium">
          <img src="/devrel/assets/viviana-marquez-prolific-we-embrace-change-award.jpg" alt="Viviana Marquez receiving Prolific We Embrace Change award">
          <figcaption class="prolific-caption">Recognized with Prolific's "We Embrace Change" award.</figcaption>
        </figure>
        <figure class="prolific-photo medium">
          <img src="/devrel/assets/viviana-marquez-prolificon-speaking-onstage.jpg" alt="Viviana Marquez speaking onstage with a microphone at Prolific">
          <figcaption class="prolific-caption">Turning product and research strategy into public developer education.</figcaption>
        </figure>
        <figure class="prolific-photo wide">
          <img src="/devrel/assets/prolific-ai-meetup-community-audience.jpg" alt="Prolific AI meetup audience during developer relations community event">
          <figcaption class="prolific-caption">Community programming for AI researchers, builders, and GTM-adjacent conversations.</figcaption>
        </figure>
        <figure class="prolific-photo wide">
          <img src="/devrel/assets/viviana-marquez-prolific-ai-meetup-panel-speaker.jpg" alt="Viviana Marquez speaking on a Prolific AI meetup panel">
          <figcaption class="prolific-caption">Moderating and speaking at Prolific AI meetup panels.</figcaption>
        </figure>
        <figure class="prolific-photo tall">
          <img src="/devrel/assets/viviana-marquez-humanx-agentic-ai-podcast-interview.jpg" alt="Viviana Marquez interviewing a guest for HumanX agentic AI podcast">
          <figcaption class="prolific-caption">Podcast conversations on agentic AI, digital twins, and human feedback.</figcaption>
        </figure>
        <figure class="prolific-photo medium">
          <img src="/devrel/assets/prolific-ai-hackathon-demo-station.jpg" alt="Prolific AI hackathon demo station with participants reviewing results">
          <figcaption class="prolific-caption">Hands-on demos that made human feedback workflows concrete.</figcaption>
        </figure>
        <figure class="prolific-photo medium">
          <img src="/devrel/assets/viviana-marquez-prolific-ai-dev-25-nyc-team.jpg" alt="Viviana Marquez with Prolific team at AI Dev 25 NYC conference">
          <figcaption class="prolific-caption">AI Dev 25 NYC with the Prolific conference team.</figcaption>
        </figure>
        <figure class="prolific-photo medium">
          <img src="/devrel/assets/viviana-marquez-prolific-ai-conference-booth-team.jpg" alt="Viviana Marquez with Prolific booth team at AI conference">
          <figcaption class="prolific-caption">Conference booth presence for Prolific's human intelligence lab message.</figcaption>
        </figure>
        <figure class="prolific-photo medium">
          <img src="/devrel/assets/viviana-marquez-frontier-ai-evals-panel.jpg" alt="Viviana Marquez on Frontier AI Evals panel with AI Circle and Prolific">
          <figcaption class="prolific-caption">Frontier AI Evals panel with AI Circle and Prolific.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="prolific-section" id="open-source">
    <div class="prolific-wrap">
      <div class="prolific-section-head">
        <div>
          <p class="prolific-eyebrow">Open Source</p>
          <h2>Repos that made Prolific easier to try, teach, and trust.</h2>
        </div>
        <p>These projects gave researchers and AI teams concrete starting points: working examples, pipelines, CLI flows, study templates, and demos for collecting high-quality human data.</p>
      </div>
      <div class="prolific-repo-grid">
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/hitl-llm-post-training">Post-training with Prolific</a>
          <small>SFT, DPO, and human feedback workflow.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/prolific-smart-glasses-pov-video-collection">Smart Glasses POV Video Collection</a>
          <small>Video collection workflow for embodied AI datasets.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/cli">Prolific CLI</a>
          <small>Contributed to developer tooling and setup paths.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/skills">Prolific Skills</a>
          <small>Contributed examples for reusable workflows.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/AI-Task-Builder-Free-Text-Collection">Free Text Collection</a>
          <small>AI Task Builder template for open-ended human responses.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/AI-Task-Builder-Image-Collection">Image Collection</a>
          <small>Contributed to image collection workflows.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/rlhf_data_collection_pipeline_aitb">RLHF Data Collection Pipeline</a>
          <small>Pipeline for human preference and feedback collection.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/prolific-secure-links-demo">Secured External URL</a>
          <small>Demo for secure external study links.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/prolific-external-study-link-getting-started">External Study Link</a>
          <small>Getting-started path for external study workflows.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/prolific-ai-task-builder-getting-started">AI Task Builder</a>
          <small>Introductory guide for Prolific's AI Task Builder.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/prolific-survey-getting-started">Prolific Survey</a>
          <small>Getting-started survey workflow.</small>
        </article>
        <article class="prolific-repo">
          <a href="https://github.com/prolific-oss/">Prolific OSS README</a>
          <small>Created the organization description README, plus an Among Bots demo using Deliberate Labs.</small>
        </article>
      </div>
    </div>
  </section>

  <section class="prolific-section alt" id="community">
    <div class="prolific-wrap">
      <div class="prolific-section-head">
        <div>
          <p class="prolific-eyebrow">Meetups</p>
          <h2>Rooms where frontier AI teams could compare notes.</h2>
        </div>
        <p>I handled the end-to-end event motion: logistics, speaker outreach, marketing, hosting, and GTM lead handoff.</p>
      </div>
      <div class="prolific-timeline">
        <article class="prolific-event">
          <div class="prolific-date"><span>May</span><span>2026</span></div>
          <div class="prolific-event-body">
            <h3><a href="https://luma.com/2x62tiuu">Operationalizing Agents w/ AI</a></h3>
            <p>San Francisco with Google Research, Google DeepMind, and Snowflake.</p>
          </div>
        </article>
        <article class="prolific-event">
          <div class="prolific-date"><span>May</span><span>2026</span></div>
          <div class="prolific-event-body">
            <h3><a href="https://luma.com/ljfk2sxn">Frontier Evals w/ AI Circle</a></h3>
            <p>Seattle with Amazon, Braintrust, and Microsoft.</p>
          </div>
        </article>
        <article class="prolific-event">
          <div class="prolific-date"><span>Mar</span><span>2026</span></div>
          <div class="prolific-event-body">
            <h3><a href="https://luma.com/0qusb8j8">Frontier Evals w/ AI Circle</a></h3>
            <p>New York with Google DeepMind, Cohere, and LinkedIn.</p>
          </div>
        </article>
        <article class="prolific-event">
          <div class="prolific-date"><span>Dec</span><span>2025</span></div>
          <div class="prolific-event-body">
            <h3><a href="https://luma.com/0zbx2brz">What 25,000 Humans Really Think About AI</a></h3>
            <p>San Francisco event featuring Prolific's point of view on human data and AI.</p>
          </div>
        </article>
        <article class="prolific-event">
          <div class="prolific-date"><span>Nov</span><span>2025</span></div>
          <div class="prolific-event-body">
            <h3><a href="https://luma.com/772frd2b">Beyond the Benchmark</a></h3>
            <p>San Francisco with Inflection AI.</p>
          </div>
        </article>
        <article class="prolific-event">
          <div class="prolific-date"><span>Sep</span><span>2025</span></div>
          <div class="prolific-event-body">
            <h3><a href="https://luma.com/tyue3bfq">Researchers Building Real-World AI Tooling</a></h3>
            <p>San Francisco with Prolific, USF, and Stanford, plus strategic dinner events in SF, NYC, and Seattle.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="prolific-section">
    <div class="prolific-wrap">
      <div class="prolific-section-head">
        <div>
          <p class="prolific-eyebrow">Conferences and Hackathons</p>
          <h2>From booth strategy to hands-on builders.</h2>
        </div>
        <p>I led conference activations end-to-end when Prolific needed a strong developer-facing presence, and supported additional moments where human data, evals, and AI tooling were already in the room.</p>
      </div>
      <div class="prolific-list">
        <article class="prolific-item">
          <h3><a href="https://www.linkedin.com/posts/prolific-com_meet-us-at-ai-dev-conf-x-sf-prolific-ugcPost-7455300072084488192-OgHj">AI Developer Conference by DeepLearning.AI</a></h3>
          <p class="prolific-meta">Lead: San Francisco, Apr 2026. Logistics, contract, marketing, booth, and GTM handoff.</p>
        </article>
        <article class="prolific-item">
          <h3>AI Developer Conference by DeepLearning.AI</h3>
          <p class="prolific-meta">Lead: New York, Nov 2025.</p>
        </article>
        <article class="prolific-item">
          <h3>Conference support</h3>
          <p class="prolific-meta">AI Engineer World's Fair, London Tech Week, ICLR, Human X, and AI Engine Summer Hack.</p>
        </article>
        <article class="prolific-item">
          <h3><a href="https://www.linkedin.com/posts/tmrh_sf-prolific-rossgeller-activity-7474091193195270144-pidA">UC Berkeley EMBA x USF MSDS Hackathon</a></h3>
          <p class="prolific-meta">San Francisco, Jun 2026.</p>
        </article>
        <article class="prolific-item">
          <h3>Memories.ai Hackathon Partnership</h3>
          <p class="prolific-meta">London and San Francisco, Sep-Oct 2025. <a href="https://luma.com/iu37305e">London</a> and <a href="https://luma.com/fqne87rp">San Francisco</a>.</p>
        </article>
        <article class="prolific-item">
          <h3>Strategic dinners</h3>
          <p class="prolific-meta">San Francisco, New York, and Seattle across 2025-2026.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="prolific-section prolific-feature-band" id="content">
    <div class="prolific-wrap">
      <div class="prolific-section-head">
        <div>
          <p class="prolific-eyebrow">Content</p>
          <h2>Technical narratives for the human-in-the-loop AI moment.</h2>
        </div>
        <p>From scripting and filming to writing and publishing, I translated Prolific's product and market thesis into artifacts developers and AI teams could actually use.</p>
      </div>
      <div class="prolific-content-grid">
        <article class="prolific-content">
          <h3>YouTube</h3>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=vh6jUmuXLhU">How to Post-Train an LLM: SFT, DPO, Human Feedback with Prolific</a></li>
            <li><a href="https://www.youtube.com/watch?v=rUCeI8Yv__g">How to Install Prolific's CLI Using GitHub</a></li>
          </ul>
        </article>
        <article class="prolific-content">
          <h3>Writing</h3>
          <ul>
            <li><a href="https://huggingface.co/blog/ProlificAI/autoresearch-hitl-experiment">When does autoresearch need a human?</a></li>
            <li><a href="https://www.prolific.com/resources/how-the-best-ai-teams-evaluate-at-speed-lessons-from-microsoft-amazon-and-braintrust">How the best AI teams evaluate at speed</a></li>
            <li><a href="https://www.humanx.co/us/blog/your-ai-agent-is-optimized-to-finish">Your AI agent is optimized to finish. That's not always what you need</a></li>
          </ul>
        </article>
        <article class="prolific-content">
          <h3>Podcast</h3>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=-zm3ZPLUsCA">Can Digital Twins Evaluate Agentic AI? ft. Dr Dakuo Wang</a></li>
            <li><a href="https://lnkd.in/edPPFTMJ">Humans as AI Managers: Our Evolving Role in the Era of Experience</a></li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="prolific-section alt">
    <div class="prolific-wrap">
      <div class="prolific-section-head">
        <div>
          <p class="prolific-eyebrow">Speaking and Enablement</p>
          <h2>Explaining AI systems to researchers, builders, and internal teams.</h2>
        </div>
        <p>My DevRel work also lived in the rooms where people needed clarity: university summits, technical communities, alumni panels, internal AI education, and sales-adjacent product storytelling.</p>
      </div>
      <div class="prolific-speaking">
        <article class="prolific-panel">
          <h3>Guest speaker engagements</h3>
          <ul class="prolific-compact-list">
            <li>AJCU Provosts AI Leadership and Transformation Summit, San Francisco, Jun 2026</li>
            <li>USF Alumni Panel, San Francisco, Jun 2026</li>
            <li><a href="https://luma.com/z9px4nbg">The LLM Lifecycle at PyLadies SF</a>, San Francisco, May 2026</li>
            <li><a href="https://luma.com/1k8djkt9">From Code to Connection at Write the Docs Bay Area</a>, San Francisco, Jan 2026</li>
            <li><a href="https://www.meetup.com/usf-data-science-and-ai-speaker-series/events/310636474/">AI &amp; Language at Data Science Speaker Series</a>, San Francisco, Sep 2025. <a href="https://www.youtube.com/watch?v=i8SrA77OtcY">Watch</a></li>
          </ul>
        </article>
        <article class="prolific-panel">
          <h3>Internal and GTM enablement</h3>
          <p>Led internal AI education, teaching teams core AI concepts, how to demo Prolific, and how to position the product across post-training, evals, and modern AI workflows.</p>
          <br>
          <p>Supported audience growth across Prolific's community channels, including Luma from zero to roughly two thousand followers and LinkedIn from 39k to 175k.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="prolific-footer-cta">
    <div class="prolific-wrap">
      <p class="prolific-eyebrow">The throughline</p>
      <h2>Make human data feel concrete, credible, and alive for AI builders.</h2>
      <p>That was the job: build the public artifacts, host the right conversations, create the technical education, and help Prolific show up wherever frontier AI teams were asking how to evaluate, train, and improve systems with people in the loop.</p>
    </div>
  </section>
</main>
