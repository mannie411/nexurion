#!/bin/bash

# Image Migration Script
# This script updates all figma:asset imports to use public folder images

echo "Starting image migration..."

# Create public images directory structure
mkdir -p public/images/{logos,heroes,services,industries,team,case-studies,insights,partners,misc}
echo "✓ Created directory structure"

# Function to run sed replacements
run_replacements() {
  # Logos
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/c18b1953968920cb0d4ee285841e0dc2d349091b\.png|/images/logos/nexurion-logo.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/aafd4eb69cadb2fa325c7c72235f39c6b2d19020\.png|/images/logos/nexurion-logo-dark.png|g' {} +

  # Hero Backgrounds
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/b2cf7a4e662e5991314d3486f99f09475587458c\.png|/images/heroes/hero-home.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/b0f913320d2aa6b9bf990fd509eacbb3c9945057\.png|/images/heroes/hero-home-alt.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/02c799cd54cdc528ce2ff238bb6426bec280f4c8\.png|/images/heroes/hero-solutions.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/d3d2ff58c75cf19f00d5161e4434cffb6c52e547\.png|/images/heroes/hero-etrm.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/f24e06781072ac16e598fa146ffded6d1594c183\.png|/images/heroes/hero-cybersecurity.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/514416e8cc3135f606d961e6c7a49e0cdf82aa6d\.png|/images/heroes/hero-it-delivery.png|g' {} +

  # Service Images
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/b37e7fb7ab3c32c987f877364f3df1079cf86a5a\.png|/images/services/etrm-ctrm.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/eccfc09918384ae5c688282fe74a1972bdc45183\.png|/images/services/cybersecurity.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/9f87c191ed857915c20451a06bb53b531a86b10e\.png|/images/services/it-project-delivery.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/813a4352594e35f8066f306f08dc85453188fbd0\.png|/images/services/benefits-etrm.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/554297a1b7d63054d6c466e9d040441c8e6af1ad\.png|/images/services/benefits-cyber.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/cd2fb9c7d97b346d6a32a0ce7d13092515d05bf7\.png|/images/services/benefits-it.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/b62a997cf89a8f5074f2f5988997cfb5e6bfefd2\.png|/images/services/cta-background.png|g' {} +

  # Industry Images
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/6a0e7dbb5e1de76fbe4d33ab9dddebed34d32162\.png|/images/industries/energy-utilities.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/d056250d517259c85b8844a9406ab8b95d442330\.png|/images/industries/financial-services.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/518fedee35200c088d4c394782c8aac8271afc85\.png|/images/industries/manufacturing.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/16b81776a35bb4d459999c73c18a21b4e9741a94\.png|/images/industries/retail.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/3433c9963f8878d37a9c40ca712b065247f2e17a\.png|/images/industries/healthcare.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/fd8cf1c55da43f65b9a4011bdf600f1a2e9724d6\.png|/images/industries/technology.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/163f409f8019ccb84e663bef3349f239bd209f93\.png|/images/industries/telecommunications.png|g' {} +

  # Team Images
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/c1b375ecdc801419d98cd9aab02303503a30f709\.png|/images/team/team-meeting.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503\.png|/images/team/team-collaboration.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/a0db0be4867cf0beccd50ebafd956dcd536ec0da\.png|/images/team/office-workspace.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/114677be9306ac9d9ccedc68afe01c04919b7a7c\.png|/images/team/team-discussion.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/6ae67972c330d134fc3317297311bd22fb1c4b4b\.png|/images/team/team-working.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/b936c5291c0803c8133b37b8e13aff560963a0e1\.png|/images/team/professional-team.png|g' {} +

  # Case Study Images
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/1d34efc3745671e869ae0bf83f9101d559191987\.png|/images/case-studies/engineers-job-site.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/228c8f5fd81c88b3d1863a11c65c9379e28558ab\.png|/images/case-studies/case-study-hero.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/d11d9d6a598dd53660640a59b16eea61f5b67c0c\.png|/images/case-studies/overlay-3.png|g' {} +
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/1794152d54d1fbc74d7134cedbf5336bdfc8da36\.png|/images/case-studies/overlay-4.png|g' {} +

  # Insights Images
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/792a6b31722d8485ef70a9988e0be704bbbd7918\.png|/images/insights/article-1.png|g' {} +

  # Misc Images
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/076f08b8acb5f47619b655a40ce3d40a40cc6e71\.png|/images/misc/delivery-process-diagram.png|g' {} +

  # Partners
  find src -type f -name "*.tsx" -exec sed -i 's|figma:asset/dadec12eccab49d8f8012c1f4122af8c8ebd48ea\.png|/images/partners/partner-logos.png|g' {} +

  echo "✓ Updated all image paths"
}

# Run replacements
run_replacements

# Remove import statements containing figma:asset
find src -type f -name "*.tsx" -exec sed -i '/import.*figma:asset/d' {} +
echo "✓ Removed figma:asset import statements"

echo ""
echo "Migration complete!"
echo ""
echo "Next steps:"
echo "1. Export all images from Figma using the hash names in /public/images/README.md"
echo "2. Organize them into the appropriate /public/images subdirectories"
echo "3. Verify the application loads correctly"
echo ""
echo "Directory structure created at: /public/images/"
