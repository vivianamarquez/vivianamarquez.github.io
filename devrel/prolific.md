---
layout: base
title: Developer Relations at Prolific
subtitle: Building Prolific's DevRel function from the ground up
meta-title: Viviana Marquez | Prolific DevRel Record
meta-description: "A reference page listing Viviana Marquez's Developer Relations work at Prolific across open source, events, content, speaking, internal enablement, and GTM support."
meta-keywords: "Viviana Marquez, Prolific, Developer Relations, DevRel, AI community, AI events, open source, human feedback, RLHF, AI evaluation, AI Task Builder, technical content, developer advocacy"
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
    grid-template-columns: minmax(0, 1fr) 210px;
    gap: 28px;
    align-items: end;
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
    max-width: 720px;
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
    margin: 24px 0 22px;
  }

  .record-carousel-head {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: baseline;
    margin-bottom: 9px;
  }

  .record-carousel-head span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 64px;
    height: 30px;
    color: var(--record-accent);
    background: var(--record-accent-soft);
    border: 1px solid rgba(155, 47, 109, 0.16);
    border-radius: 999px;
    font-size: 16px;
    font-weight: 600;
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
    color: var(--record-muted);
    font-size: 13px;
    line-height: 1.35;
  }

  .record-stat a {
    color: var(--record-muted);
    text-decoration: underline;
    text-underline-offset: 2px;
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
    padding: 22px;
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
    padding: 13px 0;
    border-top: 1px solid var(--record-line);
  }

  .record-list li:first-child {
    border-top: 0;
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
    margin: 24px 0 4px;
    color: var(--record-accent);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
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

  @media (max-width: 820px) {
    .prolific-record {
      padding-top: 92px;
    }

    .record-stats {
      grid-template-columns: repeat(2, minmax(0, 1fr));
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

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "Developer Relations at Prolific",
  "description": "A reference record of Viviana Marquez's Developer Relations work at Prolific from June 2025 to July 2026 across open source, AI community events, technical content, speaking, internal enablement, and GTM support.",
  "url": "https://vivianamarquez.com/devrel/prolific/",
  "image": "https://vivianamarquez.com/devrel/assets/viviana-marquez-prolificon-speaking-onstage.jpg",
  "about": {
    "@type": "Person",
    "name": "Viviana Marquez",
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
        <p class="record-summary">Built Prolific's developer relations function from the ground up, spanning technical content, community, open source, events, internal enablement, and GTM support. This work helped shape the direction of DevRel at Prolific and was recognized with the <strong>"We Embrace Change" award</strong>.</p>
      </div>
      <div class="record-portrait">
        <img src="/devrel/assets/viviana-marquez-prolificon-speaking-onstage.jpg" alt="Viviana Marquez speaking onstage at Prolific">
      </div>
    </header>

    <section class="record-carousel" aria-label="Photo highlights">
      <div class="record-carousel-head">
        <span aria-hidden="true">&larr; &rarr;</span>
      </div>
      <div class="record-carousel-track">
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolificon-ai-community-audience.jpg" alt="Viviana Marquez speaking to a Prolific AI community audience"></div>
        <div class="record-slide"><img src="/devrel/assets/prolific-ai-meetup-community-audience.jpg" alt="Prolific AI meetup audience"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-ai-meetup-panel-speaker.jpg" alt="Viviana Marquez on a Prolific AI meetup panel"></div>
        <div class="record-slide tall"><img src="/devrel/assets/viviana-marquez-humanx-agentic-ai-podcast-interview.jpg" alt="Viviana Marquez recording an agentic AI podcast interview"></div>
        <div class="record-slide"><img src="/devrel/assets/prolific-ai-hackathon-demo-station.jpg" alt="Prolific AI hackathon demo station"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-ai-dev-25-nyc-team.jpg" alt="Viviana Marquez with Prolific team at AI Dev 25 NYC"></div>
        <div class="record-slide tall"><img src="/devrel/assets/viviana-marquez-prolific-ai-conference-booth-demo.jpg" alt="Viviana Marquez giving a Prolific AI conference booth demo"></div>
        <div class="record-slide tall"><img src="/devrel/assets/viviana-marquez-prolific-ai-conference-booth-conversation.jpg" alt="Viviana Marquez in a Prolific AI conference booth conversation"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-ai-conference-booth-team.jpg" alt="Viviana Marquez with Prolific booth team at AI conference"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-frontier-ai-evals-panel.jpg" alt="Viviana Marquez on Frontier AI Evals panel"></div>
        <div class="record-slide"><img src="/devrel/assets/viviana-marquez-prolific-we-embrace-change-award.jpg" alt="Viviana Marquez receiving Prolific We Embrace Change award"></div>
      </div>
    </section>

    <section class="record-stats" aria-label="Highlights">
      <div class="record-stat"><strong>0 &rarr; 1</strong><span>DevRel function</span></div>
      <div class="record-stat"><strong>12+</strong><span>Open-source repos</span></div>
      <div class="record-stat"><strong>+15</strong><span>Events</span></div>
      <div class="record-stat"><strong>39k &rarr; 175k</strong><span><a href="https://www.linkedin.com/in/vivianamarquez/">LinkedIn</a> audience</span></div>
      <div class="record-stat"><strong>0 &rarr; ~2k</strong><span><a href="https://luma.com/prolific?period=past">Luma</a> followers</span></div>
    </section>

    <nav class="record-nav" aria-label="Page sections">
      <a href="#open-source">Open Source</a>
      <a href="#meetups">Meetups</a>
      <a href="#conferences">Conferences</a>
      <a href="#content">YouTube</a>
      <a href="#blogs">Blogs</a>
      <a href="#podcast">Podcast</a>
      <a href="#hackathons">Hackathons</a>
      <a href="#speaking">Speaking</a>
      <a href="#misc">Misc</a>
    </nav>

    <section class="record-section" id="open-source">
      <h2>GitHub Open-Source Repos</h2>
      <p class="record-note">Public examples, demos, templates, and developer-facing workflows.</p>
      <ul class="record-list">
        <li><p class="record-item-title">Post-training with Prolific</p><p class="record-item-desc">Reference workflow for SFT, DPO, and human feedback with Prolific.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/hitl-llm-post-training">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific Smart Glasses POV Video Collection</p><p class="record-item-desc">Video collection workflow for embodied AI and POV data collection.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/prolific-smart-glasses-pov-video-collection">GitHub repo</a></p></li>
        <li><p class="record-item-title">CLI <span class="record-tag">contributed</span></p><p class="record-item-desc">Developer tooling and setup path for working with Prolific from the command line.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/cli">GitHub repo</a></p></li>
        <li><p class="record-item-title">Skills <span class="record-tag">contributed</span></p><p class="record-item-desc">Reusable workflow examples and skill-based project structure.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/skills">GitHub repo</a></p></li>
        <li><p class="record-item-title">Free Text Collection</p><p class="record-item-desc">AI Task Builder template for collecting open-ended text responses.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/AI-Task-Builder-Free-Text-Collection">GitHub repo</a></p></li>
        <li><p class="record-item-title">Image Collection <span class="record-tag">contributed</span></p><p class="record-item-desc">AI Task Builder workflow for image collection tasks.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/AI-Task-Builder-Image-Collection">GitHub repo</a></p></li>
        <li><p class="record-item-title">RLHF Data Collection Pipeline</p><p class="record-item-desc">Pipeline for collecting human feedback and preference data.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/rlhf_data_collection_pipeline_aitb">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific Secured External URL</p><p class="record-item-desc">Demo for secure external study links.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/prolific-secure-links-demo">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific External Study Link</p><p class="record-item-desc">Getting-started path for external study workflows.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/prolific-external-study-link-getting-started">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific's AI Task Builder</p><p class="record-item-desc">Introductory guide for using AI Task Builder.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/prolific-ai-task-builder-getting-started">GitHub repo</a></p></li>
        <li><p class="record-item-title">Prolific Survey</p><p class="record-item-desc">Getting-started survey workflow.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/prolific-survey-getting-started">GitHub repo</a></p></li>
        <li><p class="record-item-title">Org description README</p><p class="record-item-desc">Created the GitHub organization description README.</p><p class="record-item-meta"><a href="https://github.com/prolific-oss/">GitHub org</a></p></li>
        <li><p class="record-item-title">Among Bots demo</p><p class="record-item-desc">Demo using Deliberate Labs.</p></li>
      </ul>
    </section>

    <section class="record-section" id="meetups">
      <h2>Meetups</h2>
      <p class="record-note">End-to-end: logistics, speaker outreach, marketing, hosting, and GTM lead handoff.</p>
      <ul class="record-list">
        <li><p class="record-item-title">Operationalizing Agents w/ AI | Prolific</p><p class="record-item-desc">Featuring researchers from Google Research, Google DeepMind, and Snowflake.</p><p class="record-item-meta">📍 San Francisco · 🗓️ May 2026 · 🔗 <a href="https://luma.com/2x62tiuu">Luma</a></p></li>
        <li><p class="record-item-title">Frontier Evals | Prolific x AI Circle</p><p class="record-item-desc">Featuring researchers from Amazon, Braintrust, and Microsoft.</p><p class="record-item-meta">📍 Seattle · 🗓️ May 2026 · 🔗 <a href="https://luma.com/ljfk2sxn">Luma</a></p></li>
        <li><p class="record-item-title">Frontier Evals | Prolific x AI Circle</p><p class="record-item-desc">Featuring researchers from Google DeepMind, Cohere, and LinkedIn.</p><p class="record-item-meta">📍 New York · 🗓️ Mar 2026 · 🔗 <a href="https://luma.com/0qusb8j8">Luma</a></p></li>
        <li><p class="record-item-title">What 25,000 Humans Really Think About AI | Prolific</p><p class="record-item-desc">Featuring researchers from Prolific.</p><p class="record-item-meta">📍 San Francisco · 🗓️ Dec 2025 · 🔗 <a href="https://luma.com/0zbx2brz">Luma</a></p></li>
        <li><p class="record-item-title">Beyond the Benchmark | Prolific</p><p class="record-item-desc">Featuring researchers from Inflection AI.</p><p class="record-item-meta">📍 San Francisco · 🗓️ Nov 2025 · 🔗 <a href="https://luma.com/772frd2b">Luma</a></p></li>
        <li><p class="record-item-title">Researchers Building Real-World AI Tooling | Prolific</p><p class="record-item-desc">Featuring researchers from Prolific, USF, and Stanford.</p><p class="record-item-meta">📍 San Francisco · 🗓️ Sep 2025 · 🔗 <a href="https://luma.com/tyue3bfq">Luma</a></p></li>
        <li><p class="record-item-title">Strategic dinner events</p><p class="record-item-desc">Relationship-building dinners for AI and research audiences.</p><p class="record-item-meta">📍 San Francisco, NYC, Seattle · 🗓️ 2025-2026</p></li>
      </ul>
    </section>

    <section class="record-section" id="conferences">
      <h2>Conferences</h2>
      <p class="record-note">Lead conferences included logistics, contract, marketing, booth, and GTM lead handoff.</p>
      <h3 class="record-subhead">Lead</h3>
      <ul class="record-list">
        <li><p class="record-item-title">AI Developer Conference by DeepLearning.AI</p><p class="record-item-meta">📍 San Francisco · 🗓️ Apr 2026 · 🔗 <a href="https://www.linkedin.com/posts/prolific-com_meet-us-at-ai-dev-conf-x-sf-prolific-ugcPost-7455300072084488192-OgHj">LinkedIn</a></p></li>
        <li><p class="record-item-title">AI Developer Conference by DeepLearning.AI</p><p class="record-item-meta">📍 New York · 🗓️ Nov 2025</p></li>
      </ul>
      <h3 class="record-subhead">Support</h3>
      <p class="record-inline-list">
        <span>AI Engineer World's Fair · 📍 San Francisco · 🗓️ Jul 2026</span>
        <span>London Tech Week · 📍 London · 🗓️ Jun 2026</span>
        <span>ICLR · 📍 Rio de Janeiro · 🗓️ May 2026</span>
        <span>Human X · 📍 San Francisco · 🗓️ Apr 2026</span>
        <span>AI Engine Summer Hack · 📍 London · 🗓️ Aug 2025</span>
      </p>
    </section>

    <section class="record-section" id="content">
      <h2>YouTube Videos</h2>
      <p class="record-note">Videos were handled end-to-end: scripting, filming, editing, and publishing.</p>
      <ul class="record-list">
        <li><p class="record-item-title">How to Post-Train an LLM: SFT, DPO, Human Feedback with Prolific</p><p class="record-item-meta">🔗 <a href="https://www.youtube.com/watch?v=vh6jUmuXLhU">YouTube</a></p></li>
        <li><p class="record-item-title">How to Install Prolific's CLI Using GitHub</p><p class="record-item-meta">🔗 <a href="https://www.youtube.com/watch?v=rUCeI8Yv__g">YouTube</a></p></li>
      </ul>
    </section>

    <section class="record-section" id="blogs">
      <h2>Blog Posts</h2>
      <ul class="record-list">
        <li><p class="record-item-title">When does autoresearch need a human?</p><p class="record-item-meta">🔗 <a href="https://huggingface.co/blog/ProlificAI/autoresearch-hitl-experiment">Hugging Face</a></p></li>
        <li><p class="record-item-title">How the best AI teams evaluate at speed: Lessons from Microsoft, Amazon, and Braintrust</p><p class="record-item-meta">🔗 <a href="https://www.prolific.com/resources/how-the-best-ai-teams-evaluate-at-speed-lessons-from-microsoft-amazon-and-braintrust">Prolific</a></p></li>
        <li><p class="record-item-title">Your AI agent is optimized to finish. That's not always what you need</p><p class="record-item-meta">🔗 <a href="https://www.humanx.co/us/blog/your-ai-agent-is-optimized-to-finish">HumanX</a></p></li>
      </ul>
    </section>

    <section class="record-section" id="podcast">
      <h2>Podcast</h2>
      <ul class="record-list">
        <li><p class="record-item-title">Can Digital Twins Evaluate Agentic AI? ft. Dr Dakuo Wang</p><p class="record-item-meta">🔗 <a href="https://www.youtube.com/watch?v=-zm3ZPLUsCA">YouTube</a></p></li>
        <li><p class="record-item-title">Humans as AI Managers: Our Evolving Role in the Era of Experience</p><p class="record-item-meta">🔗 <a href="https://lnkd.in/edPPFTMJ">LinkedIn</a></p></li>
      </ul>
    </section>

    <section class="record-section" id="hackathons">
      <h2>Hackathons</h2>
      <ul class="record-list">
        <li><p class="record-item-title">UC Berkeley EMBA students x USF MSDS students</p><p class="record-item-meta">📍 San Francisco · 🗓️ Jun 2026 · 🔗 <a href="https://www.linkedin.com/posts/tmrh_sf-prolific-rossgeller-activity-7474091193195270144-pidA">LinkedIn</a></p></li>
        <li><p class="record-item-title">Memories.ai Hackathon partnership</p><p class="record-item-meta">📍 London &amp; San Francisco · 🗓️ Sep-Oct 2025 · 🔗 <a href="https://luma.com/iu37305e">London Luma</a> · <a href="https://luma.com/fqne87rp">San Francisco Luma</a></p></li>
      </ul>
    </section>

    <section class="record-section" id="speaking">
      <h2>Guest Speaker Engagements Representing Prolific</h2>
      <ul class="record-list">
        <li><p class="record-item-title">AJCU Provosts AI Leadership and Transformation Summit</p><p class="record-item-meta">📍 San Francisco · 🗓️ Jun 2026</p></li>
        <li><p class="record-item-title">USF Alumni Panel</p><p class="record-item-meta">📍 San Francisco · 🗓️ Jun 2026</p></li>
        <li><p class="record-item-title">The LLM Lifecycle at PyLadies SF</p><p class="record-item-meta">📍 San Francisco · 🗓️ May 2026 · 🔗 <a href="https://luma.com/z9px4nbg">Luma</a></p></li>
        <li><p class="record-item-title">From Code to Connection at Write the Docs Bay Area</p><p class="record-item-meta">📍 San Francisco · 🗓️ Jan 2026 · 🔗 <a href="https://luma.com/1k8djkt9">Luma</a></p></li>
        <li><p class="record-item-title">AI &amp; Language at Data Science Speaker Series</p><p class="record-item-meta">📍 San Francisco · 🗓️ Sep 2025 · 🔗 <a href="https://www.meetup.com/usf-data-science-and-ai-speaker-series/events/310636474/">Meetup</a> · <a href="https://www.youtube.com/watch?v=i8SrA77OtcY">YouTube</a></p></li>
      </ul>
    </section>

    <section class="record-section" id="misc">
      <h2>Misc</h2>
      <ul class="record-list">
        <li><p class="record-item-title">Internal enablement</p><p class="record-item-desc">Led internal AI education and enablement, teaching teams core AI concepts, how to demo Prolific, and how to position it within post-training, evals, and modern AI workflows.</p></li>
        <li><p class="record-item-title">Audience growth</p><p class="record-item-desc">Supported audience growth across Prolific's community channels, including Luma 0 &rarr; ~2k followers and LinkedIn 39k &rarr; 175k.</p></li>
      </ul>
    </section>

  </div>
</main>
