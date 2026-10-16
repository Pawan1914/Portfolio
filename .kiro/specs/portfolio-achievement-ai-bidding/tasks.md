# Implementation Plan: Portfolio Achievement — AI Bidding

## Overview

This plan adds the AI automated bidding achievement to the data-driven portfolio. It extends the category taxonomy, keeps the label and gradient maps consistent, adds the new project entry, wires the filter ordering, and validates everything with property-based and unit tests. Each step builds on the previous one and ends integrated into the running portfolio.

## Tasks

- [x] 1. Extend the category taxonomy and label map
  - In `types/project.ts`, add `"ai-automation"` to the `ProjectCategory` union
  - Add `"ai-automation": "AI / Automation"` to the `categoryLabels` record
  - Rely on the `Record<ProjectFilter, string>` typing to confirm completeness via `getDiagnostics`
  - _Requirements: 2.1, 2.2, 2.3, 2.5_

- [x] 2. Add the category gradient style
  - [x] 2.1 Add the `ai-automation` gradient entry in `ProjectCard.tsx`
    - Add an `"ai-automation"` key to `categoryGradients` with `from`/`to`/`glow` Tailwind classes (violet/fuchsia palette distinct from existing categories)
    - Verify with `getDiagnostics` that `Record<ProjectCategory, ...>` is fully satisfied
    - _Requirements: 2.4, 2.6_

  - [ ]* 2.2 Write property test for category map completeness
    - **Property 3: Category maps completeness and consistency**
    - **Validates: Requirements 2.3, 2.4, 2.5, 2.6**

- [x] 3. Add the AI bidding project entry
  - [x] 3.1 Append the AI_Bidding_Project object to `data/projects.ts`
    - Set `number` to a unique `"07"`, `category` to `"ai-automation"`, and populate all required fields per the design Data Models section
    - Include at least three `highlights` and at least one `stack` entry
    - Give it a title referencing automated bidding on freelancer.com using AI
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

  - [ ]* 3.2 Write property test for project data integrity
    - **Property 1: Project data integrity**
    - **Validates: Requirements 1.2, 1.4, 1.5, 2.1**

  - [ ]* 3.3 Write property test for project number uniqueness
    - **Property 2: Project number uniqueness**
    - **Validates: Requirements 1.6**

  - [ ]* 3.4 Write unit test for the AI bidding entry
    - Assert the entry exists and its `title` references automated bidding, freelancer.com, and AI
    - _Requirements: 1.1, 1.3_

- [x] 4. Wire the filter ordering in the Work Section
  - Add `"ai-automation"` to the `filterOptions` array in `WorkSection.tsx` so the filter button order is explicit
  - _Requirements: 4.1_

- [ ] 5. Checkpoint - Ensure all tests pass
  - Run `vitest --run` and resolve any failures. Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Validate rendering of the project card
  - [ ]* 6.1 Write property test for card field rendering
    - **Property 4: Card renders all project fields**
    - **Validates: Requirements 3.2**

  - [ ]* 6.2 Write property test for conditional preview and link rendering
    - **Property 5: Conditional preview and link rendering**
    - **Validates: Requirements 3.3, 3.4**

- [ ] 7. Validate filtering behavior
  - [ ]* 7.1 Write property test for category filter membership
    - **Property 6: Category filter restricts to matching projects** (includes empty-category edge case)
    - **Validates: Requirements 3.1, 4.2, 4.4**

  - [ ]* 7.2 Write property test for filter buttons and counts
    - **Property 7: Filter buttons and counts reflect the data**
    - **Validates: Requirements 4.1, 4.3**

- [ ] 8. Final checkpoint - Ensure all tests pass
  - Run `vitest --run`, confirm the new achievement renders under "all" and under the AI / Automation filter, and that counts are correct. Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional (tests) and can be skipped for a faster MVP, though they validate the correctness properties.
- Each task references specific requirements for traceability.
- Property tests use fast-check with a minimum of 100 iterations and are tagged `Feature: portfolio-achievement-ai-bidding, Property {number}: {property_text}`.
- Unit tests cover the specific new entry and edge cases; property tests cover universal correctness.
