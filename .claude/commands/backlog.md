---
description: Gmail backlog sweep. Counts old inbox mail and gives the one-click archive search.
argument-hint: "[age, e.g. 3m or 2w; default 1m]"
---
Run Wallace's Gmail backlog sweep.

Age: use `$ARGUMENTS` if given (for example `3m` or `2w`), otherwise `1m`.

1. Search Gmail with `mcp__Gmail__search_threads` (load it with ToolSearch if it isn't loaded), query exactly:
   `in:inbox older_than:<age> -is:starred -label:@Action -label:@Waiting`
   Report the result count estimate as "about N conversations".
2. Give him the same search as a link to open in Gmail:
   `https://mail.google.com/mail/u/0/#search/in%3Ainbox+older_than%3A<age>+-is%3Astarred+-label%3A%40Action+-label%3A%40Waiting`
3. Then the four clicks: tick the box above the list, click "Select all conversations that match this search", click Archive, click OK.

Archiving is his click: don't archive, trash or label anything yourself, and don't list the emails. Starred mail and anything labelled @Action or @Waiting is never touched by this search. Keep the reply to five lines.
