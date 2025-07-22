# uvce-mizo-web

[git&github setup](https://www.theodinproject.com/lessons/foundations-setting-up-git) Hemi link aṭang hian linux hmang tan git leh github setup dan a awm a, windows hmang tan chuan git bash download a ngai anga. hemi [link](https://git-scm.com/downloads/win) atang hian a download theih e. Windows tan pawh khimi setup khi a tawk ang.

*git leh github hmanga kan thawh ho dan tur tlangpui*

- A theih chuan ssh hi [git&github setup](https://www.theodinproject.com/lessons/foundations-setting-up-git) a dah ang khian setup tum ila. Hemi hian a tih ber chu github leh kan pc/laptop/machine a connect.

- Kan repository hi kan [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) anga. 'Repository clone' tih chu github a code kan dah khawmna (repository or repo) kha kan local machine (kan laptop/pc) ah kan copy tihna

- Chuanin terminal hman dan tlangpui hi hriat a ṭha a, chumi atan chuan linux hmang tan [bash commands](https://phoenixnap.com/kb/bash-commands) hi en ila, windows hmang tan pawh [bash commands](https://phoenixnap.com/kb/bash-commands) hi a en theih a, [cmd](https://www.geeksforgeeks.org/techtips/most-useful-cmd-commands-in-windows/) leh **powershell** pawh a hman theih.

## *git commands kan hman hian working repository ah kan awm a ngai (chu chu repo kan clone kha a ni)*
- A tlangpuiin [git commands](https://education.github.com/git-cheat-sheet-education.pdf) kan hman tur ho chu

    `git status` hei hian info a rawn chhawp chhuak anga, kan remote-repo a file kan track leh track loh te a rawn tarlang a (hemi command hi chu hman deuh char char a pawi lo)

    `git add -A` hei hi chuan kan remote-repo a kan file zawng zawng track turin a siam a. (kan project size avangin a hnuaia👇 command zawk hman hi habit ah nei thei ila a tha awm e)

    file pakhat kan khawih lai chauh kha track kan duh chuan; (entir nan, file hming kha app.js lo ni ta se) `git add app.js` kan ti ang.

    Chutichuanin `git status` command i hman leh chuan, a hmaa status a rawn hmuh che leh tunah status a rawn hmuh che a danglam tawh anga.

    Entir nan index.html kan lo khawih danglam a, `git add index.html` kan tih hnuah kan thil thlak danglam (changes made) kha kan **commit** a ngai a. index.html ah khan a footer div ah khan thil lo add belh ta ang ila `git commit -m "contacts link added to footer"` te ka ti thei ta a ni.

    **commit** neih tam hi a pawi lo va, nakin zela bug lo awm thei pinpoint nan a tangkai a ni.

    ### pawimawh_dennnn

    Kan main branch hi `main` tih a ni a.

    Code changes (thil thlak danglam) kan neih hmain `git pull` tih zel a tha.

    Kan workflow atan hian **branching** kan hmang anga. Kan hna insem azir zelin branch thar kan siam anga.

    Entir nan contacts page ka lo khawih dawn chuan `git checkout -b contacts` te ka ti thei a, branch thar ka siam "contacts" ah chuan code ka va thlak danglam anga. *Basic git workflow* (`git pull`, `git add`, `git commit`, `git push`) kha ka apply anga. Chuan ka zawh fel hnuah [**pull request**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request) ka siam ang.

    [**pull request**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request) siam dan tlangpui chu, khimi example👆 tho khi hmang ila, ka branch siam contacts kha ka push fel hnuah [github](github.com)-a kan repo ah ka va lut anga. Ka branch siam thar contacts tih kha a lo awm anga. Compare and [**pull request**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request) tih emaw kha a lo awm anga. Chuan pull request siamna page a rawn inhawng anga, kan thil thlak danglam tak a kha kan va sawifiah thei a.

    Tuna kan repo settings-ah hian pull request merge dawn hian mi pahnihin an review phawt a ngai a ni.

    Hemi [video](https://www.youtube.com/watch?v=jhtbhSpV5YA) hi lo en chhin ila, github workflow tlangpui hriat zual nan. Tah hian a youtuber pa hian **master** a tih hian **main** tih nen a in ang reng e.


    *siam that ngai a awm chuan pls in contact me*



