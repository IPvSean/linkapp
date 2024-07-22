function generateLinks() {
    const url = document.getElementById('urlInput').value;
    const twitterCode = '7015Y0000048LaoQAE';
    const linkedinCode = '7015Y0000048LatQAE';
    const instagramCode = '7015Y0000048Lb3QAE';
    const tiktokCode = '7015Y0000048Lb8QAE';

    document.getElementById('twitterLink').textContent = `${url}?sc_cid=${twitterCode}`;
    document.getElementById('linkedinLink').textContent = `${url}?sc_cid=${linkedinCode}`;
    document.getElementById('instagramLink').textContent = `${url}?sc_cid=${instagramCode}`;
    document.getElementById('tiktokLink').textContent = `${url}?sc_cid=${tiktokCode}`;
}
