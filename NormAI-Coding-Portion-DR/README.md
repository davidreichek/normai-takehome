# Run Instructions
My Node Version: 16.14.2

cd into NormAI-Coding-Portion-DR
npm install
npm run start

## Implementation

The DocumentDetail component is responsible for all rendered content on the page.

The Toolbar component is responsible for general features relevant to working within an organization and managing the document. This includes:

    Status Select - As a compliance analyst, I can communicate document statuses to my organization
    View History - As a compliance analyst, I can view all changes made to the document and understabd which users are responsible for them
    Share - As a compliance analyst, I can export the current document
    View File - As a compliance analyst, I can view the current file
    Resubmit Document - As a compliance analyst, I can submit another document for compliance check (clicking this button refetches sample data)

The TestResult component is a recursive structure responsible for storing the results of the compliance check

The TestDetail component renders information relevant to each node and provides important features:

    Message Icon On Result: As a compliance analyst, I can quickly determine whether a check is unaltered, has a comment, or has been overwritten.
    View Details: As a compliance analyst, I can view sub-checks (if applicable)
    Override / Undo Override: As a compliance analyst, I can fix false negatives and false positives (looking at the overwrite messages, I assumed that false results were possible)
    View Comments: As a compliance analyst, I can view comments on a check and add comments of my own.
    Investigate: As a compliance analyst, I can click 'Investigate' and have an AI system provide the relevant policies and document content it used to make its determination.

## Discussion

While my work properly visualizes the structure of the result, as a user I feel that I am constantly "going in and out" of the document. 

I'm looking at comments on the current page, then I click Investigate and I'm on the document, then I'm back on the current page to make an overwrite, etc etc.

A smoother experience would be one where the document itself is the application surface, with a UI suggestive of something like DocuSign. I can click different checks to navigate me to relevant content, make comments directly on the text, etc. This would resolve the friction of having to go back-and-forth between a separate page to make crucial user actions.
