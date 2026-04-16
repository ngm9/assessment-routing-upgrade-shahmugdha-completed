# Task Overview
Utkrusht runs a proof-of-skills marketplace where companies browse and assign technical assessments to candidates. The product team is building a small internal "Assessment Browser" tool that lets team members see which assessments are available and share direct links to specific ones. Right now, the tool shows a list of assessments on a single page, but there is no proper way to navigate to a dedicated details view or share a URL for a single assessment.

### Objectives
- Enable URL-based navigation between a list of assessments and a details view for a single assessment.
- Make each assessment in the list clickable so that it opens its own details view using the browser URL.
- Show key information about a selected assessment on its dedicated page, using the existing shared data source.
- Display a clear fallback message when a user navigates to a details URL for an assessment ID that does not exist.
- Use simple React concepts.

### How to Verify
- Open the app in a browser and confirm that there is a route that shows the full list of assessments.
- Click an assessment in the list and verify that the browser URL changes to include that assessment's ID, and that a details view is shown.
- Copy the details page URL into a new browser tab or window and confirm that loading that URL directly still shows the correct assessment details.
- Manually change the assessment ID in the URL to an ID that does not exist in the data and confirm that a clear "not found" style message is rendered instead of a blank or broken page.
- Check that the list of assessments still renders correctly and that the existing shared data module is reused rather than duplicated.

### Helpful Tips
- Consider how to separate the concerns of showing a list of items and showing details for a single item so that each view stays easy to understand.
- Think about where the assessment data should live so that both the list view and details view can rely on the same source of truth.
- Explore how the browser's address bar and route parameters can help you identify which assessment to show on the details page.
- Review how click events on list items can be used to trigger navigation to another view instead of only updating local state.
- Consider how to handle situations where the requested assessment ID does not match any known assessment, and what message a user should see in that case.
