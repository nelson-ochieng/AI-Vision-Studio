# Release candidate 1 — release gate

Verified in the development container: Node unit tests for tracking and metrics, static source checks, ZIP integrity. npm registry DNS resolution failed, so dependencies, full type checking, actual inference, webcam and Windows installer remain unverified. No lockfile generated. No GitHub publication performed.

New: approximate video tracking and counts, label filtering, dataset backup restore, image size/type checks, camera-only permission restrictions. Existing features retained in source; regression testing required.

Outstanding: multiple independent projects, complete offline support for all engines, live advanced tracking, custom detector training, hardware integration and rule builder, background workers, checkpoints, augmentation, model versioning/comparison, standard annotation exports, batch processing, full interface redesign, comprehensive security audit, license selection and end-to-end testing. Existing held-out split does not prevent near-duplicate leakage. Electron and dependency versions need security review. Do not label stable until these scope gaps are resolved or explicitly accepted and the runtime gate passes.

## Windows gate
- npm install; retain package-lock.json and review npm audit results.
- npm test; npm run build; npm start.
- Verify camera permission, capture, uploads, real inference, training, metrics, export/import, backup restore, video tracking and advanced still-image modules.
- Restart offline and verify each model separately; do not claim offline support for failures.
- npm run dist; install unsigned installer on a clean Windows test account and repeat smoke tests.
- Review third-party licenses and select an original-code license before public distribution.

## Additional development
Batch image detection, single-image COCO/YOLO export and local model cache inventory added. Runtime and type checks pending. Other previously listed gaps remain unless explicitly resolved.

Workspace isolation added for datasets, classifiers and evaluations; default workspace retains legacy keys. Workspace switching reloads the renderer. Annotation state and advanced analysis are not persisted per project. Full workspace backup and runtime verification remain pending.

Seeded stratified holdout, optional training-only horizontal flips, completed classifier version snapshots and restoration, and user guide added. No resumable optimizer checkpoints or version comparison yet. Compilation and runtime tests pending.
