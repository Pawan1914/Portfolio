# Requirements Document

## Introduction

This feature adds a new achievement/project to the portfolio: an AI-powered automated bidding system built for freelancer.com. The achievement will be represented as a `Project` entry in the existing data-driven portfolio so that it renders inside the Work section alongside current projects, respects the category filtering behavior, and displays through the existing `ProjectCard` component.

Because this achievement is an AI automation tool (not an enterprise insurance product, dashboard, event platform, creative, or consumer product), the existing category taxonomy may not cleanly describe it. This spec therefore covers both adding the project entry and extending the category system so the new work is correctly labeled and filterable.

## Glossary

- **Portfolio_System**: The Next.js application that renders the portfolio, including data, types, and components.
- **Project**: A typed data object defined in `types/project.ts` and listed in `data/projects.ts` describing a single piece of work.
- **Project_Category**: The `ProjectCategory` union type used to classify a Project and drive filtering.
- **Work_Section**: The `WorkSection` component that renders the project list, category filter buttons, and empty state.
- **Project_Card**: The `ProjectCard` component that renders an individual Project.
- **Category_Filter**: The set of filter buttons in the Work_Section that let a visitor narrow projects by Project_Category.
- **AI_Bidding_Project**: The specific new Project entry describing automated bidding on freelancer.com using AI.
- **Featured_Project**: A Project with `featured` set to true, rendered in a larger two-column layout.

## Requirements

### Requirement 1: Add the AI Bidding achievement as a Project entry

**User Story:** As the portfolio owner, I want the AI automated bidding achievement added as a project entry, so that visitors can see this work in my portfolio.

#### Acceptance Criteria

1. THE Portfolio_System SHALL include an AI_Bidding_Project entry in the `data/projects.ts` projects array.
2. THE AI_Bidding_Project SHALL define all required Project fields: `number`, `title`, `type`, `category`, `company`, `role`, `description`, `highlights`, `stack`, and `impact`.
3. THE AI_Bidding_Project `title` SHALL communicate that the work is automated bidding on freelancer.com using AI.
4. THE AI_Bidding_Project `highlights` field SHALL contain at least three entries describing the achievement.
5. THE AI_Bidding_Project `stack` field SHALL contain at least one technology entry.
6. THE AI_Bidding_Project `number` field SHALL be unique among all Project entries in the projects array.

### Requirement 2: Classify the achievement with an appropriate category

**User Story:** As the portfolio owner, I want the AI bidding achievement classified under a category that fits AI automation work, so that it is grouped and filtered accurately.

#### Acceptance Criteria

1. THE AI_Bidding_Project `category` value SHALL be a member of the `ProjectCategory` union type defined in `types/project.ts`.
2. WHERE the existing categories do not describe AI automation work, THE Portfolio_System SHALL add a new Project_Category value to the `ProjectCategory` union type.
3. WHEN a new Project_Category value is added, THE Portfolio_System SHALL provide a corresponding human-readable label in the `categoryLabels` record.
4. WHEN a new Project_Category value is added, THE Portfolio_System SHALL provide a corresponding gradient style entry in the `categoryGradients` record in `ProjectCard`.
5. THE `categoryLabels` record SHALL contain exactly one label for every `ProjectFilter` value.
6. THE `categoryGradients` record SHALL contain exactly one style entry for every `ProjectCategory` value.

### Requirement 3: Render the achievement in the Work Section

**User Story:** As a portfolio visitor, I want to see the AI bidding achievement rendered in the work list, so that I can learn about the owner's AI automation experience.

#### Acceptance Criteria

1. WHEN the Work_Section renders with the "all" filter active, THE Portfolio_System SHALL display the AI_Bidding_Project.
2. WHEN the AI_Bidding_Project is rendered, THE Project_Card SHALL display the project `title`, `type`, `role`, `company`, `description`, `highlights`, `stack`, and `impact`.
3. WHERE the AI_Bidding_Project has no `image`, THE Project_Card SHALL render the gradient preview using the project `category`.
4. WHERE the AI_Bidding_Project defines an `href`, THE Project_Card SHALL render a link to that destination.

### Requirement 4: Filter the achievement by its category

**User Story:** As a portfolio visitor, I want to filter projects by the AI automation category, so that I can view related work together.

#### Acceptance Criteria

1. WHEN the AI_Bidding_Project category has at least one project, THE Work_Section SHALL display a Category_Filter button for that category.
2. WHEN a visitor selects the Category_Filter button for the AI_Bidding_Project category, THE Work_Section SHALL display only projects whose `category` equals the selected category.
3. WHEN a Category_Filter button is displayed, THE Work_Section SHALL display the count of projects in that category next to the label.
4. WHEN a visitor selects a category that contains no projects, THE Work_Section SHALL display the empty-state message.
