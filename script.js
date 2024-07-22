function generateLinks() {
    const url = document.getElementById('urlInput').value;
    const twitterCode = '7015Y0000048LaoQAE';
    const linkedinCode = '7015Y0000048LatQAE';
    const instagramCode = '7015Y0000048Lb3QAE';
    const tiktokCode = '7015Y0000048Lb8QAE';
    const ansibleTwitterCode = '7013a000003DTdoAAG';
    const ansibleYoutubeCode = '7015Y000003t3zHQAQ';

    document.getElementById('twitterLink').value = `${url}?sc_cid=${twitterCode}`;
    document.getElementById('linkedinLink').value = `${url}?sc_cid=${linkedinCode}`;
    document.getElementById('instagramLink').value = `${url}?sc_cid=${instagramCode}`;
    document.getElementById('tiktokLink').value = `${url}?sc_cid=${tiktokCode}`;
    document.getElementById('ansibleTwitterLink').value = `${url}?sc_cid=${ansibleTwitterCode}`;
    document.getElementById('ansibleYoutubeLink').value = `${url}?sc_cid=${ansibleYoutubeCode}`;
}

function copyToClipboard(elementId) {
    const copyText = document.getElementById(elementId);
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
}
