# Probing Motion Tokenizers

Research website for **Do Motion Tokenizers for Co-Speech Gesture Generation Encode Gesture Semantics?**.

Varsha Suresh, Divij Jain, Jia Liu, M. Hamza Mughal, and Vera Demberg.
MINT Workshop @ EMNLP 2026.

- Website: https://probing-motion-tokenizer.github.io/
- Publication: https://aclanthology.org/2026.mint-1.11/
- Preprint: https://arxiv.org/abs/2610.03765

## Publishing
This is a static site. In GitHub Pages settings, publish the main branch from
/ (root). No package installation or build is required.

Edit index.html for content, style.css for site-specific presentation, and
script.js for figure tabs and citation copying.
Research figures and the locally linked PDF reproduce the arXiv v1 version.
The main Paper button links to the official conference PDF.
The downloadable citation follows ACL Anthology.

## Reconstruction examples
The `examples/` folder contains vector paths extracted from the author-supplied
PDFs `clip_1421_palm.pdf`, `clip_1252_palm.pdf`, and `clip_1453_cup.pdf`.
The four comparisons are 1421 at t=0,1,2 (left hand), 1252 at t=0,1,2
and t=4,5,6 separately (right hand), and 1453 at t=7,8,9 (left hand).
Hand circles and a close-up of the final time point are added for comparison.
Source pose coordinates and finger colors are preserved; only uniform scaling
and placement are changed. Hand side follows the supplied visual instructions.
Each comparison has a desktop SVG and a two-column mobile SVG, selected with
`picture` at a 600px breakpoint. They show the same six source poses.
