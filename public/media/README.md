# Image Assets Migration Guide

This directory contains all the image assets for the Nexurion website.

## Directory Structure

```
/public/images/
├── logos/           # Company logos and branding
├── heroes/          # Hero section background images
├── services/        # Service/solution page images
├── industries/      # Industry sector images
├── case-studies/    # Case study images and overlays
├── team/           # Team member photos
├── insights/       # Blog/insight article images
├── partners/       # Partner logos
└── misc/           # Miscellaneous images
```

## Migration Mapping

Below is a mapping of the original figma:asset hashes to their new organized paths:

### Logos
- `c18b1953968920cb0d4ee285841e0dc2d349091b.png` → `/images/logos/nexurion-logo.png`
- `aafd4eb69cadb2fa325c7c72235f39c6b2d19020.png` → `/images/logos/nexurion-logo-dark.png`

### Hero Backgrounds
- `b2cf7a4e662e5991314d3486f99f09475587458c.png` → `/images/heroes/hero-home.png`
- `b0f913320d2aa6b9bf990fd509eacbb3c9945057.png` → `/images/heroes/hero-home-alt.png`
- `02c799cd54cdc528ce2ff238bb6426bec280f4c8.png` → `/images/heroes/hero-solutions.png`
- `d3d2ff58c75cf19f00d5161e4434cffb6c52e547.png` → `/images/heroes/hero-etrm.png`
- `f24e06781072ac16e598fa146ffded6d1594c183.png` → `/images/heroes/hero-cybersecurity.png`
- `514416e8cc3135f606d961e6c7a49e0cdf82aa6d.png` → `/images/heroes/hero-it-delivery.png`

### Service/Solution Images
- `b37e7fb7ab3c32c987f877364f3df1079cf86a5a.png` → `/images/services/etrm-ctrm.png`
- `eccfc09918384ae5c688282fe74a1972bdc45183.png` → `/images/services/cybersecurity.png`
- `9f87c191ed857915c20451a06bb53b531a86b10e.png` → `/images/services/it-project-delivery.png`
- `813a4352594e35f8066f306f08dc85453188fbd0.png` → `/images/services/benefits-etrm.png`
- `554297a1b7d63054d6c466e9d040441c8e6af1ad.png` → `/images/services/benefits-cyber.png`
- `cd2fb9c7d97b346d6a32a0ce7d13092515d05bf7.png` → `/images/services/benefits-it.png`
- `b62a997cf89a8f5074f2f5988997cfb5e6bfefd2.png` → `/images/services/cta-background.png`

### Industry Images
- `6a0e7dbb5e1de76fbe4d33ab9dddebed34d32162.png` → `/images/industries/energy-utilities.png`
- `d056250d517259c85b8844a9406ab8b95d442330.png` → `/images/industries/financial-services.png`
- `518fedee35200c088d4c394782c8aac8271afc85.png` → `/images/industries/manufacturing.png`
- `16b81776a35bb4d459999c73c18a21b4e9741a94.png` → `/images/industries/retail.png`
- `3433c9963f8878d37a9c40ca712b065247f2e17a.png` → `/images/industries/healthcare.png`
- `fd8cf1c55da43f65b9a4011bdf600f1a2e9724d6.png` → `/images/industries/technology.png`
- `163f409f8019ccb84e663bef3349f239bd209f93.png` → `/images/industries/telecommunications.png`

### About/Team Images
- `c1b375ecdc801419d98cd9aab02303503a30f709.png` → `/images/team/team-meeting.png`
- `ece298d0ec2c16f10310d45724b276a6035cb503.png` → `/images/team/team-collaboration.png`
- `a0db0be4867cf0beccd50ebafd956dcd536ec0da.png` → `/images/team/office-workspace.png`
- `114677be9306ac9d9ccedc68afe01c04919b7a7c.png` → `/images/team/team-discussion.png`
- `6ae67972c330d134fc3317297311bd22fb1c4b4b.png` → `/images/team/team-working.png`
- `b936c5291c0803c8133b37b8e13aff560963a0e1.png` → `/images/team/professional-team.png`

### Case Study Images
- `1d34efc3745671e869ae0bf83f9101d559191987.png` → `/images/case-studies/engineers-job-site.png`
- `228c8f5fd81c88b3d1863a11c65c9379e28558ab.png` → `/images/case-studies/case-study-hero.png`
- `d11d9d6a598dd53660640a59b16eea61f5b67c0c.png` → `/images/case-studies/overlay-3.png`
- `1794152d54d1fbc74d7134cedbf5336bdfc8da36.png` → `/images/case-studies/overlay-4.png`

### Insights/Blog Images
- `792a6b31722d8485ef70a9988e0be704bbbd7918.png` → `/images/insights/article-1.png`

### Process/Methodology
- `076f08b8acb5f47619b655a40ce3d40a40cc6e71.png` → `/images/misc/delivery-process-diagram.png`

### Partners
- `dadec12eccab49d8f8012c1f4122af8c8ebd48ea.png` → `/images/partners/partner-logos.png`

## How to Migrate

1. Export each image from your Figma design with the corresponding hash name
2. Rename and move it to the appropriate directory according to the mapping above
3. All import statements in the codebase have been updated to use these new paths
4. Images will be served from `/images/...` at runtime

## Notes

- All images should be optimized for web (compressed PNGs or WebP format recommended)
- Consider using responsive image sizes for better performance
- The public folder is served as-is, so `/public/images/logos/nexurion-logo.png` becomes accessible at `/images/logos/nexurion-logo.png`
