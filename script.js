// Define the image links for each group
const groupResults = {
    1: 'https://cdn.discordapp.com/attachments/1320314105222926366/1320405296144978011/Q-G1_DAY1.png?ex=67701242&is=676ec0c2&hm=27c8851f668d19af3920f0bce28966e626dc22fe09b575296c8f8c7c1ca07814&',
    2: 'https://example.com/group2.png',
    3: 'https://example.com/group3.png',
    // Add all valid URLs for groups up to 32
    32: 'https://example.com/group32.png'
};

// Populate grid items dynamically
const resultsContainer = document.getElementById('results');
const fullscreenView = document.getElementById('fullscreenView');
const fullscreenImage = document.createElement('img');
fullscreenImage.id = 'fullscreenImage';
fullscreenImage.style.maxWidth = '90%';
fullscreenImage.style.maxHeight = '80%';
fullscreenView.appendChild(fullscreenImage);

for (let i = 1; i <= 32; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.textContent = `Group ${i}`;

    // Add click event to open fullscreen
    gridItem.addEventListener('click', () => openFullscreen(i));
    resultsContainer.appendChild(gridItem);
}

// Open fullscreen view with specific group result
function openFullscreen(groupNumber) {
    const imageUrl = groupResults[groupNumber];
    if (!imageUrl) {
        console.error(`No image URL found for Group ${groupNumber}`);
        return;
    }
    fullscreenImage.src = imageUrl;
    fullscreenView.style.display = 'flex';
}

// Close fullscreen view
function closeFullscreen() {
    fullscreenView.style.display = 'none';
    fullscreenImage.src = '';
}

// Back button setup
const backButton = document.createElement('img');
backButton.id = 'backButton';
backButton.src = 'https://cdn.discordapp.com/attachments/1200476511807995977/1322350435528605697/back.png?ex=67708e4f&is=676f3ccf&hm=7e491d2dd1ab8864be2003330be5016c0cee4d7dca92009cb75569c44f9e00b7&';
backButton.alt = 'Back Button';
backButton.style.cursor = 'pointer';
backButton.style.width = '80px';
backButton.style.height = 'auto';
backButton.addEventListener('click', closeFullscreen);
fullscreenView.appendChild(backButton);

// Footer block setup with complex layout
const footerBlock = document.createElement('div');
footerBlock.className = 'block-layout block-layout--layout';
footerBlock.style = `
    --m-grid-template-rows: 10.555555555555555vw auto 0.5555555555555556vw auto auto 4.444444444444445vw auto 11px;
    --t-grid-template-rows: minmax(38px, auto) minmax(20px, auto) minmax(2px, auto) minmax(31px, auto) minmax(13px, auto) minmax(16px, auto) minmax(13px, auto) 1fr;
    --grid-template-rows: minmax(39px, auto) minmax(3px, auto) minmax(14px, auto) minmax(8px, auto) minmax(23px, auto) minmax(2px, auto) minmax(6px, auto) minmax(4px, auto) minmax(8px, auto) minmax(18px, auto) 1fr;
    --grid-template-columns: 9.558823529411764% 0.8986928104575163% 10.620915032679738% 12.581699346405228% 3.5130718954248366% 0.24509803921568626% 3.6764705882352944% 16.258169934640524% 0.7352941176470588% 3.2679738562091507% 38.6437908496732%;
    --block-min-height: 177px;
    background-image: url('https://cdn.discordapp.com/attachments/1200476511807995977/1322375159574822942/footer.png?ex=6770a556&is=676f53d6&hm=187d47fb175d11acb57a7900d1b4c8b8cc412375ac771edc0a801467af1efb1a&');
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 10px;
    display: grid;
    align-items: center;
    justify-items: center;
`;

// Organized By Block
const organizedBy = document.createElement('div');
organizedBy.className = 'layout-element layout-element--layout';
organizedBy.innerHTML = `
    <h5 style="color: white; font-family: 'Stretch Pro', sans-serif; font-weight: 400; font-size: 18px;">Organized by OBS Production</h5>
`;

// Social Media Icons Block
const socialIcons = document.createElement('div');
socialIcons.className = 'social-icons';
socialIcons.innerHTML = `
    <a href="https://www.instagram.com/obs.production" target="_blank" rel="noopener">
        <img src="https://cdn.discordapp.com/attachments/1200476511807995977/1322376941336006666/insta.png?ex=6770a6ff&is=676f557f&hm=6222b6cd040ab6e3babef044e0d91027806f749a1f99c38bac6eea867417383a&" alt="OBS Logo" style="height: 75px; width: 75px;">
    </a>
`;

// Copyright Block
const copyrightBlock = document.createElement('div');
copyrightBlock.className = 'layout-element layout-element--layout';
copyrightBlock.innerHTML = `
    <p style="color: white; font-family: 'Stretch Pro', sans-serif; font-size: 14px;">© 2024. All rights reserved.</p>
`;

// Append elements to footer block
footerBlock.appendChild(organizedBy);
footerBlock.appendChild(socialIcons);
footerBlock.appendChild(copyrightBlock);

// Append footer block to the body
document.body.appendChild(footerBlock);
