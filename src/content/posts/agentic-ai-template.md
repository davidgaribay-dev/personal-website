---
title: "Challenging my mental model about agentic AI"
description: "How Claude Code changed my approach to learning and weekend projects, from building an open-source agentic AI template to reconstructing my homelab for long-horizon agents."
publishDate: 2026-01-15
tags: ["agentic-ai", "claude-code", "homelab", "proxmox", "terraform", "ansible", "infrastructure"]
draft: false
featured: true
image: "/template.png"
hideHeroImage: true
---

Claude Code has dramatically changed the way I approach learning and weekend projects!

This winter break, I spent time building an open-source agentic AI template with the sole purpose of challenging my own mental model of agentic AI.

I quickly hit a wall with resource constraints and network limitations, so I spent this past weekend reconstructing my homelab from the ground up—adding VLANs, clustering, and better sandboxing so I could run long-horizon agents.

I'm now leveraging Proxmox, Terraform, and Ansible to create ephemeral dev environments that are fully sandboxed and isolated.

I started my career as a data processing specialist and learned most of what I know through free online resources like YouTube. I'm planning to document this journey and contribute back to the community that taught me so much.

Follow along for deep dives into agentic AI architectures, infrastructure-as-code patterns, and lessons learned!

It's still a work in progress and by no means production ready.

<div style="display: flex; gap: 1rem; margin-top: 2rem; overflow-x: auto;">
  <img src="/homelab1.jpg" alt="Homelab setup with server rack" class="gallery-thumb" style="width: 200px; height: 150px; object-fit: cover; border-radius: 1rem; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);" />
  <img src="/homelab2.jpg" alt="Homelab server rack detail" class="gallery-thumb" style="width: 200px; height: 150px; object-fit: cover; border-radius: 1rem; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);" />
</div>

<div id="lightbox" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.9); z-index: 1000; justify-content: center; align-items: center;">
  <span class="lightbox-close" style="position: absolute; top: 1rem; right: 1.5rem; color: white; font-size: 2.5rem; cursor: pointer; z-index: 1001;">&times;</span>
  <img src="" alt="" class="lightbox-image" style="max-width: 90%; max-height: 90%; object-fit: contain; border-radius: 0.5rem;" />
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('.gallery-thumb');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox?.querySelector('.lightbox-image');
    const closeBtn = lightbox?.querySelector('.lightbox-close');

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        if (lightboxImg && lightbox) {
          lightboxImg.src = thumb.src;
          lightboxImg.alt = thumb.alt;
          lightbox.style.display = 'flex';
        }
      });
    });

    closeBtn?.addEventListener('click', () => {
      if (lightbox) lightbox.style.display = 'none';
    });

    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox) {
        lightbox.style.display = 'none';
      }
    });
  });
</script>
