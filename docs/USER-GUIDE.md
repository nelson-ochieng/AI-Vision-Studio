# AI Vision Studio user guide

Install Node.js 22.13 or newer. Run npm install, npm test, npm run build, then npm start. Use npm run dist for an unsigned Windows installer.

## Workspaces
Open Projects and create a named workspace. Switching reloads the application. Each workspace isolates datasets, classifiers and evaluation. Export datasets and model files separately for backups.

## Vision and training
Use Live Vision for webcam inference, Image Analysis for uploaded images, Video Analysis for tracking, and Batch Analysis for multiple images. In Datasets create at least two classes with five distinct images each. Train a classifier in Training. Optional horizontal flips are appropriate only for mirror-invariant classes. Evaluation reports held-out accuracy; avoid near-duplicate images across the split. Model Library supports restoring completed training versions and exporting models with labels.

## Annotation and offline use
Annotation exports normalized JSON, single-image COCO and YOLO. Keep class mappings consistent across images. Settings downloads supported pretrained models; Model Library displays cached models. Advanced engines may require network access.

## Release limitations
See RELEASE-STATUS.md. This is a release candidate, not a validated stable build.
