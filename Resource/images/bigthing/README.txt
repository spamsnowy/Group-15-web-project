BIG RECTANGLE PHOTOS  (Resource/images/bigthing)
================================================
These photos play one after another in the big rectangle at the top of the
Home page. They are also used as the banner photo on the other pages.

TO ADD A PHOTO
  1. Copy the photo into this folder, e.g.  library.jpg
     (small letters, no spaces; about 1920 pixels wide looks sharpest)
  2. Open script.js, find  heroSlides  (SECTION 1, SETTINGS) and copy one line:
       { image: "library.jpg", alt: "The main library", position: "50% 50%" },
TO REMOVE A PHOTO   delete its line in heroSlides.
TO CHANGE THE SPEED change  heroSeconds  in script.js.
