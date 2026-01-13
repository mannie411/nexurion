# Public Assets Directory

This directory contains static assets that are served directly by the web server.

## Contents

- `favicon.ico` - Website favicon (replace with your actual favicon)
- Add other static assets here like:
  - Images (logos, backgrounds, etc.)
  - Fonts
  - Other static files that don't need to be processed by the build system

## Usage

Files in this directory can be referenced in your HTML/CSS using absolute paths:
- `/public/favicon.ico`
- `/public/images/logo.png`
- etc.

## Note

The `figma:asset` imports in the codebase are handled differently by the build system and should continue to use that import scheme.
