# Testing Google Tag Manager with Partytown

Given Partytown is recommended in the Astro docs I've tried to implement that but I've tried everything I can think of and it just doesn't seem to work.

I have the datalayer declared in the head, and I have forwarding in my astro.config file.

If I set up GTM in the 'normal' way (ignoring Partytown) then it all works fine, but I lose page speed and score on lighthouse.

If I set up only the Google Analytics tag (G-XYZ rather than GTM-ABC) with Partytown it works partially for page visits but doesn't send events.

If I set up the GTM tag with Partytown as described in their docs (https://partytown.builder.io/google-tag-manager) it just doesn't work at all. No GTM tag is found in the tag assistant tests.

If I set up the GTM tag in the way Google suggest, but then set type to text/partytown then the GTM tag is found but no events fire.

According to this list (https://github.com/BuilderIO/partytown/issues/497) some people have Partytown and GTM working, but there are other threads with people saying it doesn't work.

I even tried implementing this rejected docs suggestion to try to set up url proxies but that doesn't work either. (https://github.com/withastro/astro/pull/8588/files)

I've made this public repo with a super basic 2 page astro site here and hosted it on netlify here (https://regal-bavarois-615df8.netlify.app/).
This is the simplest test I could think of and I still can't get Partytown and GTM to work together.

Any suggestions on how to get Partytown / GTM / Astro all working together would be very welcome. Given Partytown is in the Astro docs I assume it does actually work somehow, but I can't figure out what I've done wrong.
