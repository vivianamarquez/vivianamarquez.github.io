---
layout: base
title: Developer Relations at Prolific
subtitle: Building Prolific's DevRel function from the ground up
meta-title: Viviana Marquez | Prolific DevRel Record
meta-description: "A reference page listing Viviana Marquez's Developer Relations work at Prolific across open source, events, content, speaking, internal enablement, and GTM support."
---

<style>
  :root {
    --record-ink: #1f1930;
    --record-muted: #6c6478;
    --record-line: rgba(31, 25, 48, 0.13);
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
    padding: 116px 20px 80px;
  }

  .record-wrap {
    width: min(980px, 100%);
    margin: 0 auto;
  }

  .record-hero {
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
    max-width: 760px;
    font-size: clamp(34px, 5.6vw, 62px);
    line-height: 1.06;
    letter-spacing: 0;
    font-weight: 600;
  }

  .record-summary {
    margin: 20px 0 0;
    max-width: 760px;
    color: var(--record-muted);
    font-size: 18px;
    line-height: 1.55;
  }

  .record-carousel {
    margin: 22px 0 20px;
  }

  .record-carousel-track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(240px, 34%);
    gap: 10px;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    padding: 0 0 10px;
    scrollbar-width: thin;
  }

  .record-slide {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: 8px;
    background: var(--record-tint);
    border: 1px solid var(--record-line);
    scroll-snap-align: start;
  }

  .record-slide.tall {
    aspect-ratio: 3 / 4;
  }

  .record-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 54% center;
    display: block;
  }

  .record-stats {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
    margin: 18px 0 10px;
  }

  .record-stat {
    display: block;
    padding: 14px;
    background: var(--record-panel);
    border: 1px solid var(--record-line);
    border-radius: 8px;
    color: inherit;
    text-decoration: none;
  }

  a.record-stat:hover,
  a.record-stat:focus {
    border-color: rgba(155, 47, 109, 0.36);
    box-shadow: 0 8px 24px rgba(31, 25, 48, 0.07);
  }

  .record-stat strong {
    display: block;
    margin-bottom: 4px;
    font-size: 24px;
    line-height: 1;
    font-weight: 600;
  }

  .record-stat span {
    color: var(--record-muted);
    font-size: 13px;
    line-height: 1.35;
  }

  .record-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 28px 0 44px;
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
    padding: 28px;
    background: var(--record-panel);
    border: 1px solid var(--record-line);
    border-radius: 8px;
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
    color: var(--record-muted);
    font-size: 15px;
    line-height: 1.55;
  }

  .record-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .record-list li {
    display: grid;
    grid-template-columns: 146px minmax(0, 1fr);
    gap: 16px;
    padding: 14px 0;
    border-top: 1px solid var(--record-line);
  }

  .record-list li:first-child {
    border-top: 0;
  }

  .record-label {
    color: var(--record-muted);
    font-size: 13px;
    font-weight: 700;
    line-height: 1.45;
  }

  .record-main {
    min-width: 0;
    line-height: 1.5;
  }

  .record-main strong {
    font-weight: 600;
  }

  .record-main a {
    color: var(--record-accent);
    text-decoration: none;
    border-bottom: 1px solid rgba(155, 47, 109, 0.28);
  }

  .record-main a:hover,
  .record-main a:focus {
    border-color: currentColor;
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

  @media (max-width: 820px) {
    .prolific-record {
      padding-top: 92px;
    }

    .record-stats {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .record-carousel-track {
      grid-auto-columns: minmax(220px, 68%);
    }

    .record-list li {
      grid-template-columns: 1fr;
      gap: 5px;
    }
  }

  @media (max-width: 520px) {
    .record-section {
      padding: 20px;
    }

    .record-stats {
      grid-template-columns: 1fr;
    }
  }
</style>

<main class="prolific-record">
  <div class="record-wrap">
    <header class="record-hero">
      <div>
        <p class="record-kicker">June 2025 - July 2026</p>
        <h1>Developer Relations at Prolific</h1>
        <p class="record-summary">Built Prolific's developer relations function from zero across technical content, community, open source, events, internal enablement, and GTM support. Recognized with the "We Embrace Change" award for shaping its direction.</p>
      </div>
    </header>

    <section class="record-carousel" aria-label="Photo highlights">
      <div class="record-carousel-track">
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolificon-ai-community-audience.jpg" alt="Viviana Marquez speaking to a Prolific AI community audience"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-we-embrace-change-award.jpg" alt="Viviana Marquez receiving Prolific We Embrace Change award"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolificon-speaking-onstage.jpg" alt="Viviana Marquez speaking onstage at Prolific"></div>
        <div class="record-slide"><img src="/devrel/assets/prolific-ai-meetup-community-audience.jpg" alt="Prolific AI meetup audience"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-ai-meetup-panel-speaker.jpg" alt="Viviana Marquez on a Prolific AI meetup panel"></div>
        <div class="record-slide tall"><img src="/devrel/assets/viviana-marquez-humanx-agentic-ai-podcast-interview.jpg" alt="Viviana Marquez recording an agentic AI podcast interview"></div>
        <div class="record-slide"><img src="/devrel/assets/prolific-ai-hackathon-demo-station.jpg" alt="Prolific AI hackathon demo station"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-ai-dev-25-nyc-team.jpg" alt="Viviana Marquez with Prolific team at AI Dev 25 NYC"></div>
        <div class="record-slide tall"><img src="/devrel/assets/viviana-marquez-prolific-ai-conference-booth-demo.jpg" alt="Viviana Marquez giving a Prolific AI conference booth demo"></div>
        <div class="record-slide tall"><img src="/devrel/assets/viviana-marquez-prolific-ai-conference-booth-conversation.jpg" alt="Viviana Marquez in a Prolific AI conference booth conversation"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-ai-conference-booth-team.jpg" alt="Viviana Marquez with Prolific booth team at AI conference"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-frontier-ai-evals-panel.jpg" alt="Viviana Marquez on Frontier AI Evals panel"></div>
      </div>
    </section>

    <section class="record-stats" aria-label="Highlights">
      <div class="record-stat"><strong>0 &rarr; 1</strong><span>DevRel function</span></div>
      <div class="record-stat"><strong>12+</strong><span>Open-source repos</span></div>
      <a class="record-stat" href="https://luma.com/prolific?period=past"><strong>0 &rarr; ~2k</strong><span>Luma followers</span></a>
      <a class="record-stat" href="https://www.linkedin.com/in/vivianamarquez/"><strong>39k &rarr; 175k</strong><span>LinkedIn audience</span></a>
      <div class="record-stat"><strong>+15</strong><span>Events</span></div>
    </section>

    <nav class="record-nav" aria-label="Page sections">
      <a href="#open-source">Open Source</a>
      <a href="#meetups">Meetups</a>
      <a href="#conferences">Conferences</a>
      <a href="#content">Content</a>
      <a href="#podcast">Podcast</a>
      <a href="#hackathons">Hackathons</a>
      <a href="#speaking">Speaking</a>
      <a href="#misc">Misc</a>
    </nav>

    <section class="record-section" id="open-source">
      <h2>GitHub Open-Source Repos</h2>
      <p class="record-note">Public examples, demos, templates, and developer-facing workflows.</p>
      <ul class="record-list">
        <li><span class="record-label">Post-training</span><span class="record-main"><a href="https://github.com/prolific-oss/hitl-llm-post-training">Post-training with Prolific</a></span></li>
        <li><span class="record-label">Video collection</span><span class="record-main"><a href="https://github.com/prolific-oss/prolific-smart-glasses-pov-video-collection">Prolific Smart Glasses POV Video Collection</a></span></li>
        <li><span class="record-label">CLI</span><span class="record-main"><a href="https://github.com/prolific-oss/cli">CLI</a> <span class="record-tag">contributed</span></span></li>
        <li><span class="record-label">Skills</span><span class="record-main"><a href="https://github.com/prolific-oss/skills">Skills</a> <span class="record-tag">contributed</span></span></li>
        <li><span class="record-label">AI Task Builder</span><span class="record-main"><a href="https://github.com/prolific-oss/AI-Task-Builder-Free-Text-Collection">Free Text Collection</a></span></li>
        <li><span class="record-label">AI Task Builder</span><span class="record-main"><a href="https://github.com/prolific-oss/AI-Task-Builder-Image-Collection">Image Collection</a> <span class="record-tag">contributed</span></span></li>
        <li><span class="record-label">RLHF</span><span class="record-main"><a href="https://github.com/prolific-oss/rlhf_data_collection_pipeline_aitb">RLHF Data Collection Pipeline</a></span></li>
        <li><span class="record-label">Secure links</span><span class="record-main"><a href="https://github.com/prolific-oss/prolific-secure-links-demo">Prolific Secured External URL</a></span></li>
        <li><span class="record-label">Study link</span><span class="record-main"><a href="https://github.com/prolific-oss/prolific-external-study-link-getting-started">Prolific External Study Link</a></span></li>
        <li><span class="record-label">AI Task Builder</span><span class="record-main"><a href="https://github.com/prolific-oss/prolific-ai-task-builder-getting-started">Prolific's AI Task Builder</a></span></li>
        <li><span class="record-label">Survey</span><span class="record-main"><a href="https://github.com/prolific-oss/prolific-survey-getting-started">Prolific Survey</a></span></li>
        <li><span class="record-label">GitHub org</span><span class="record-main"><a href="https://github.com/prolific-oss/">Org description README</a> <span class="record-tag">created</span></span></li>
        <li><span class="record-label">Demo</span><span class="record-main">Among Bots demo using Deliberate Labs</span></li>
      </ul>
    </section>

    <section class="record-section" id="meetups">
      <h2>Meetups</h2>
      <p class="record-note">End-to-end: logistics, speaker outreach, marketing, hosting, and GTM lead handoff.</p>
      <ul class="record-list">
        <li><span class="record-label">San Francisco · May 2026</span><span class="record-main"><strong>Operationalizing Agents w/ AI</strong> — Google Research, Google DeepMind, Snowflake · <a href="https://luma.com/2x62tiuu">Luma</a></span></li>
        <li><span class="record-label">Seattle · May 2026</span><span class="record-main"><strong>Frontier Evals w/ AI Circle</strong> — Amazon, Braintrust, Microsoft · <a href="https://luma.com/ljfk2sxn">Luma</a></span></li>
        <li><span class="record-label">New York · Mar 2026</span><span class="record-main"><strong>Frontier Evals w/ AI Circle</strong> — Google DeepMind, Cohere, LinkedIn · <a href="https://luma.com/0qusb8j8">Luma</a></span></li>
        <li><span class="record-label">San Francisco · Dec 2025</span><span class="record-main"><strong>What 25,000 Humans Really Think About AI</strong> — Prolific · <a href="https://luma.com/0zbx2brz">Luma</a></span></li>
        <li><span class="record-label">San Francisco · Nov 2025</span><span class="record-main"><strong>Beyond the Benchmark</strong> — Inflection AI · <a href="https://luma.com/772frd2b">Luma</a></span></li>
        <li><span class="record-label">San Francisco · Sep 2025</span><span class="record-main"><strong>Researchers Building Real-World AI Tooling</strong> — Prolific, USF, Stanford · <a href="https://luma.com/tyue3bfq">Luma</a></span></li>
        <li><span class="record-label">2025-2026</span><span class="record-main"><strong>Strategic dinner events</strong> — San Francisco, NYC, Seattle</span></li>
      </ul>
    </section>

    <section class="record-section" id="conferences">
      <h2>Conferences</h2>
      <p class="record-note">Lead conferences included logistics, contract, marketing, booth, and GTM lead handoff.</p>
      <ul class="record-list">
        <li><span class="record-label">Lead · San Francisco · Apr 2026</span><span class="record-main"><strong>AI Developer Conference by DeepLearning.AI</strong> · <a href="https://www.linkedin.com/posts/prolific-com_meet-us-at-ai-dev-conf-x-sf-prolific-ugcPost-7455300072084488192-OgHj">LinkedIn</a></span></li>
        <li><span class="record-label">Lead · New York · Nov 2025</span><span class="record-main"><strong>AI Developer Conference by DeepLearning.AI</strong></span></li>
        <li><span class="record-label">Support · San Francisco · Jul 2026</span><span class="record-main"><strong>AI Engineer World's Fair</strong></span></li>
        <li><span class="record-label">Support · London · Jun 2026</span><span class="record-main"><strong>London Tech Week</strong></span></li>
        <li><span class="record-label">Support · Rio de Janeiro · May 2026</span><span class="record-main"><strong>ICLR</strong></span></li>
        <li><span class="record-label">Support · San Francisco · Apr 2026</span><span class="record-main"><strong>Human X</strong></span></li>
        <li><span class="record-label">Support · London · Aug 2025</span><span class="record-main"><strong>AI Engine Summer Hack</strong></span></li>
      </ul>
    </section>

    <section class="record-section" id="content">
      <h2>YouTube Videos and Blog Posts</h2>
      <p class="record-note">Videos were handled end-to-end: scripting, filming, editing, and publishing.</p>
      <ul class="record-list">
        <li><span class="record-label">YouTube</span><span class="record-main"><a href="https://www.youtube.com/watch?v=vh6jUmuXLhU">How to Post-Train an LLM: SFT, DPO, Human Feedback with Prolific</a></span></li>
        <li><span class="record-label">YouTube</span><span class="record-main"><a href="https://www.youtube.com/watch?v=rUCeI8Yv__g">How to Install Prolific's CLI Using GitHub</a></span></li>
        <li><span class="record-label">Blog</span><span class="record-main"><a href="https://huggingface.co/blog/ProlificAI/autoresearch-hitl-experiment">When does autoresearch need a human?</a></span></li>
        <li><span class="record-label">Blog</span><span class="record-main"><a href="https://www.prolific.com/resources/how-the-best-ai-teams-evaluate-at-speed-lessons-from-microsoft-amazon-and-braintrust">How the best AI teams evaluate at speed: Lessons from Microsoft, Amazon, and Braintrust</a></span></li>
        <li><span class="record-label">Blog</span><span class="record-main"><a href="https://www.humanx.co/us/blog/your-ai-agent-is-optimized-to-finish">Your AI agent is optimized to finish. That's not always what you need</a></span></li>
      </ul>
    </section>

    <section class="record-section" id="podcast">
      <h2>Podcast</h2>
      <ul class="record-list">
        <li><span class="record-label">Episode</span><span class="record-main"><a href="https://www.youtube.com/watch?v=-zm3ZPLUsCA">Can Digital Twins Evaluate Agentic AI? ft. Dr Dakuo Wang</a></span></li>
        <li><span class="record-label">Episode</span><span class="record-main"><a href="https://lnkd.in/edPPFTMJ">Humans as AI Managers: Our Evolving Role in the Era of Experience</a></span></li>
      </ul>
    </section>

    <section class="record-section" id="hackathons">
      <h2>Hackathons</h2>
      <ul class="record-list">
        <li><span class="record-label">San Francisco · Jun 2026</span><span class="record-main"><strong>UC Berkeley EMBA students x USF MSDS students</strong> · <a href="https://www.linkedin.com/posts/tmrh_sf-prolific-rossgeller-activity-7474091193195270144-pidA">LinkedIn</a></span></li>
        <li><span class="record-label">London &amp; San Francisco · Sep-Oct 2025</span><span class="record-main"><strong>Memories.ai Hackathon partnership</strong> · <a href="https://luma.com/iu37305e">London Luma</a> · <a href="https://luma.com/fqne87rp">San Francisco Luma</a></span></li>
      </ul>
    </section>

    <section class="record-section" id="speaking">
      <h2>Guest Speaker Engagements Representing Prolific</h2>
      <ul class="record-list">
        <li><span class="record-label">San Francisco · Jun 2026</span><span class="record-main"><strong>AJCU Provosts AI Leadership and Transformation Summit</strong></span></li>
        <li><span class="record-label">San Francisco · Jun 2026</span><span class="record-main"><strong>USF Alumni Panel</strong></span></li>
        <li><span class="record-label">San Francisco · May 2026</span><span class="record-main"><strong>The LLM Lifecycle</strong> at PyLadies SF · <a href="https://luma.com/z9px4nbg">Luma</a></span></li>
        <li><span class="record-label">San Francisco · Jan 2026</span><span class="record-main"><strong>From Code to Connection</strong> at Write the Docs Bay Area · <a href="https://luma.com/1k8djkt9">Luma</a></span></li>
        <li><span class="record-label">San Francisco · Sep 2025</span><span class="record-main"><strong>AI &amp; Language</strong> at Data Science Speaker Series · <a href="https://www.meetup.com/usf-data-science-and-ai-speaker-series/events/310636474/">Meetup</a> · <a href="https://www.youtube.com/watch?v=i8SrA77OtcY">YouTube</a></span></li>
      </ul>
    </section>

    <section class="record-section" id="misc">
      <h2>Misc</h2>
      <ul class="record-list">
        <li><span class="record-label">Internal enablement</span><span class="record-main">Led internal AI education and enablement, teaching teams core AI concepts, how to demo Prolific, and how to position it within post-training, evals, and modern AI workflows.</span></li>
        <li><span class="record-label">Audience growth</span><span class="record-main">Supported audience growth across Prolific's community channels, including Luma 0 &rarr; ~2k followers and LinkedIn 39k &rarr; 175k.</span></li>
      </ul>
    </section>

  </div>
</main>
