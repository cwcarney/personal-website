(function () {
  const content = window.siteContent;
  if (!content) return;

  const byId = (id) => document.getElementById(id);
  const setText = (id, value) => {
    const el = byId(id);
    if (el) el.textContent = value;
  };

  setText('brandName', content.profile.name);
  setText('heroTitle', content.profile.title);
  setText('heroIntro', content.profile.intro);
  setText('aboutLead', content.profile.aboutLead);
  setText('contactLead', content.profile.contactLead);
  setText('year', new Date().getFullYear());
  setText('footerName', content.profile.name);

  const contactForm = byId('contactForm');
  if (contactForm) {
    contactForm.setAttribute('action', `mailto:${content.profile.email}`);
  }

  const renderCards = (targetId, items) => {
    const container = byId(targetId);
    if (!container) return;

    container.innerHTML = '';
    items.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'card';
      const linkHtml = item.link
        ? `<p><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.linkLabel || 'Open'}</a></p>`
        : '';
      card.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>${linkHtml}`;
      container.appendChild(card);
    });
  };

  const renderSocial = (targetId, data) => {
    const container = byId(targetId);
    if (!container) return;
    container.innerHTML = '';

    data.posts.forEach((post) => {
      const card = document.createElement('article');
      card.className = 'card socialPost';

      if (post.embedUrl) {
        card.innerHTML = `
          <h3>${post.title}</h3>
          <iframe class="socialEmbed" src="${post.embedUrl}" loading="lazy" title="${post.title}"></iframe>
          <p><a href="${post.postUrl}" target="_blank" rel="noopener noreferrer">Open post</a></p>
        `;
      } else {
        card.innerHTML = `
          <h3>${post.title}</h3>
          <p>Paste an embed URL in <code>content.js</code> to show the post inline.</p>
          <p><a href="${post.postUrl}" target="_blank" rel="noopener noreferrer">Open post</a></p>
        `;
      }

      container.appendChild(card);
    });
  };

  renderCards('skillsGrid', content.skills);
  renderCards('projectsGrid', content.projects);

  const instagramLink = byId('instagramLink');
  if (instagramLink) instagramLink.href = content.social.instagram.profileUrl;
  const stravaLink = byId('stravaLink');
  if (stravaLink) stravaLink.href = content.social.strava.profileUrl;

  renderSocial('instagramPosts', content.social.instagram);
  renderSocial('stravaPosts', content.social.strava);
})();
