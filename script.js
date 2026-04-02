const siteData = {
  artist: {
    name: "Notion",
    tagline: "아티스트 Notion 페이지",
    photo: "assets/profile-placeholder.jpg",
    socialLinks: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/@Notion-1012/featured"
      },
      {
        label: "Release YouTube",
        url: "https://www.youtube.com/channel/UCXOBQAI3S_CO17Yx_9UGobg"
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/notion_00"
      },
      {
        label: "Prelo Instagram",
        url: "https://www.instagram.com/prelo_ok"
      },
      {
        label: "Contact",
        url: "mailto:sx0123@naver.com"
      }
    ]
  },
  albums: [
    {
      title: "#include",
      releaseDate: "2024.05.26",
      cover: "assets/album-include-placeholder.jpg",
      links: [
        {
          label: "Spotify",
          url: "https://open.spotify.com/album/1oCo5UZo64XWABFoQDusw6"
        },
        {
          label: "Apple Music",
          url: "https://music.apple.com/us/album/include-single/1747661664?ls=1"
        },
        {
          label: "YouTube Music",
          url: "https://music.youtube.com/playlist?list=OLAK5uy_lZUbtkgkiDuY_pLbEY1Ovi76kzqH0pF4g"
        },
        {
          label: "Melon",
          url: "https://www.melon.com/album/detail.htm?albumId=11497060&snsGate=Y"
        },
        {
          label: "Genie",
          url: "https://www.genie.co.kr/detail/albumInfo?axnm=85209277"
        },
        {
          label: "FLO",
          url: "https://www.music-flo.com/detail/album/425229306/albumtrack"
        },
        {
          label: "Bugs",
          url: "https://music.bugs.co.kr/album/20645208?wl_ref=list_ab_03"
        },
        {
          label: "VIBE",
          url: "https://vibe.naver.com/album/31638492"
        }
      ]
    },
    {
      title: "String",
      releaseDate: "2026.02.02",
      cover: "assets/album-string-placeholder.jpg",
      links: [
        {
          label: "Spotify",
          url: "https://open.spotify.com/album/2gx6QE53879Ukcahu7Ob8d"
        },
        {
          label: "Apple Music",
          url: "https://music.apple.com/us/album/string-single/1872588224"
        },
        {
          label: "YouTube Music",
          url: "https://music.youtube.com/playlist?list=OLAK5uy_kqXGeHcf334TuOUTZQQfd4EApYRfytONI&si=lulS9pWgn3QXD_qL"
        },
        {
          label: "Melon",
          url: "https://www.melon.com/album/detail.htm?albumId=12828876"
        },
        {
          label: "Genie",
          url: "https://www.genie.co.kr/detail/albumInfo?axnm=87194707"
        },
        {
          label: "FLO",
          url: "https://www.music-flo.com/detail/album/449515599/albumtrack"
        },
        {
          label: "Bugs",
          url: "https://music.bugs.co.kr/album/20787110?wl_ref=list_ab_01_ar"
        },
        {
          label: "VIBE",
          url: "https://vibe.naver.com/album/36336035"
        }
      ]
    }
  ]
};

const app = document.querySelector("#app");
const COPY_RESET_DELAY = 1800;

const fallbackPalette = {
  artist: {
    accent: "#d6b183",
    text: "Profile"
  },
  album: {
    accent: "#f0b8c5",
    text: "Album"
  }
};

function createExternalLink(label, url, className, ariaLabel) {
  const link = document.createElement("a");
  link.className = className;
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", ariaLabel || `${label} (opens in a new tab)`);

  const content = document.createElement("span");
  content.className = "button-content";

  const icon = createIconBadge(label);
  const labelText = document.createElement("span");
  labelText.className = "button-label";
  labelText.textContent = label;

  content.append(icon, labelText);
  link.append(content);

  return link;
}

function createIconBadge(label) {
  const badge = document.createElement("span");
  badge.className = "icon-badge";
  badge.setAttribute("aria-hidden", "true");
  badge.innerHTML = getIconSvg(label);
  return badge;
}

function getIconSvg(label) {
  const key = normalizeIconKey(label);

  const icons = {
    youtube: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="7" fill="#FF0000"/>
        <path d="M16.9 12.55 10.25 16V8l6.65 3.45a.62.62 0 0 1 0 1.1Z" fill="#fff"/>
      </svg>
    `,
    instagram: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig" x1="4" y1="22" x2="20" y2="2" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FEDA75"/>
            <stop offset=".45" stop-color="#FA7E1E"/>
            <stop offset=".7" stop-color="#D62976"/>
            <stop offset="1" stop-color="#4F5BD5"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="7" fill="url(#ig)"/>
        <rect x="6" y="6" width="12" height="12" rx="4" stroke="#fff" stroke-width="1.8"/>
        <circle cx="12" cy="12" r="2.9" stroke="#fff" stroke-width="1.8"/>
        <circle cx="16.9" cy="7.6" r="1.1" fill="#fff"/>
      </svg>
    `,
    email: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mail" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5E7CF2"/>
            <stop offset="1" stop-color="#65D0E9"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="7" fill="url(#mail)"/>
        <path d="M5.5 8.2 12 13.2l6.5-5" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="5.5" y="7.8" width="13" height="8.8" rx="2" stroke="#fff" stroke-width="1.7"/>
      </svg>
    `,
    spotify: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#1ED760"/>
        <path d="M7.2 9.8c3.1-1 6.4-.8 9.7.6" stroke="#09110B" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M7.9 12.5c2.5-.7 5.1-.5 7.5.6" stroke="#09110B" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M8.7 15c1.8-.4 3.6-.3 5.2.4" stroke="#09110B" stroke-width="1.4" stroke-linecap="round"/>
      </svg>
    `,
    applemusic: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="7" fill="#FF496C"/>
        <path d="M14.7 6.8v8.2a2 2 0 1 1-1.3-1.88V8.4l5-1.1v6.1a2 2 0 1 1-1.3-1.88V6.1l-2.4.7Z" fill="#fff"/>
      </svg>
    `,
    youtubemusic: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FF1A0A"/>
        <circle cx="12" cy="12" r="7.1" stroke="#fff" stroke-width="1.5"/>
        <path d="M10.2 8.8 15.4 12l-5.2 3.2V8.8Z" fill="#fff"/>
      </svg>
    `,
    melon: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#00D92F"/>
        <circle cx="11" cy="13" r="4.2" fill="#07110A"/>
        <circle cx="17.3" cy="6.7" r="1.9" fill="#00D92F"/>
      </svg>
    `,
    genie: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="none" stroke="#22B4E0" stroke-width="1.7"/>
        <text x="12" y="16.2" text-anchor="middle" font-size="12.5" font-weight="800" fill="#22B4E0" font-family="Arial, sans-serif">g</text>
      </svg>
    `,
    flo: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="7" fill="#4B43FF"/>
        <path d="M8 6.7c2.2 1 4.6 1 6.8 0v2.1H10.4v2.2h3.4v2.1h-3.4v4.2H8V6.7Z" fill="#fff"/>
      </svg>
    `,
    bugs: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="7" fill="#FF4D43"/>
        <text x="12" y="15.8" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff" font-family="Arial, sans-serif">Bugs</text>
      </svg>
    `,
    vibe: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vibe" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF2D72"/>
            <stop offset="1" stop-color="#6F3DFF"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="7" fill="url(#vibe)"/>
        <rect x="5.2" y="9.5" width="2.5" height="5" rx="1" fill="#fff"/>
        <rect x="8.8" y="6.5" width="2.5" height="11" rx="1" fill="#fff"/>
        <rect x="12.45" y="4.3" width="2.5" height="15.4" rx="1" fill="#fff"/>
        <rect x="16.1" y="8" width="2.5" height="6.8" rx="1" fill="#fff"/>
      </svg>
    `,
    fallback: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="7" fill="rgba(255,255,255,0.14)"/>
        <text x="12" y="15.2" text-anchor="middle" font-size="10" font-weight="800" fill="#fff" font-family="Arial, sans-serif">N</text>
      </svg>
    `
  };

  return icons[key] || icons.fallback;
}

function normalizeIconKey(label) {
  const normalized = label.toLowerCase();

  if (normalized.includes("release youtube") || normalized === "youtube") {
    return "youtube";
  }

  if (normalized.includes("instagram")) {
    return "instagram";
  }

  if (normalized.includes("contact")) {
    return "email";
  }

  if (normalized === "spotify") {
    return "spotify";
  }

  if (normalized === "apple music") {
    return "applemusic";
  }

  if (normalized === "youtube music") {
    return "youtubemusic";
  }

  if (normalized === "melon") {
    return "melon";
  }

  if (normalized === "genie") {
    return "genie";
  }

  if (normalized === "flo") {
    return "flo";
  }

  if (normalized === "bugs") {
    return "bugs";
  }

  if (normalized === "vibe") {
    return "vibe";
  }

  return "fallback";
}

function buildHeroSection(artist) {
  const section = document.createElement("section");
  section.className = "section hero";
  section.setAttribute("aria-labelledby", "artist-name");

  const media = document.createElement("div");
  media.className = "hero-media";

  const frame = document.createElement("div");
  frame.className = "profile-frame";

  const image = document.createElement("img");
  image.className = "profile-image";
  image.src = artist.photo;
  image.alt = `${artist.name} profile photo`;
  image.loading = "eager";
  image.decoding = "async";
  image.dataset.fallbackType = "artist";
  image.dataset.fallbackLabel = artist.name;
  frame.append(image);
  media.append(frame);

  const content = document.createElement("div");
  content.className = "hero-content";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "공식 링크";

  const titleGroup = document.createElement("div");
  titleGroup.className = "hero-title-group";

  const title = document.createElement("h1");
  title.className = "hero-title";
  title.id = "artist-name";
  title.textContent = artist.name;

  const tagline = document.createElement("p");
  tagline.className = "hero-tagline";
  tagline.textContent = artist.tagline;

  const contactWrap = document.createElement("div");
  contactWrap.className = "hero-contact";

  const contactCard = document.createElement("div");
  contactCard.className = "contact-card";

  const contactMeta = document.createElement("div");
  contactMeta.className = "contact-meta";

  const contactLabel = document.createElement("span");
  contactLabel.className = "contact-label";
  contactLabel.textContent = "Email";

  const contactValue = document.createElement("span");
  contactValue.className = "contact-value";

  const contactEntry = artist.socialLinks.find((item) =>
    item.url.startsWith("mailto:")
  );
  const emailAddress = contactEntry
    ? contactEntry.url.replace(/^mailto:/, "")
    : "sx0123@naver.com";

  contactValue.textContent = emailAddress;
  contactMeta.append(contactLabel, contactValue);

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "contact-copy";
  copyButton.textContent = "이메일 복사";
  copyButton.setAttribute("aria-label", `${emailAddress} 이메일 복사`);
  copyButton.dataset.email = emailAddress;

  contactCard.append(contactMeta, copyButton);
  contactWrap.append(contactCard);

  titleGroup.append(title, tagline);

  const socialLinks = document.createElement("div");
  socialLinks.className = "social-links";
  socialLinks.setAttribute("role", "list");

  artist.socialLinks.forEach((item) => {
    if (item.url.startsWith("mailto:")) {
      return;
    }

    const link = createExternalLink(
      item.label,
      item.url,
      "link-button",
      `${artist.name} ${item.label} 새 탭에서 열기`
    );

    link.setAttribute("role", "listitem");
    socialLinks.append(link);
  });

  content.append(eyebrow, titleGroup, contactWrap, socialLinks);
  section.append(media, content);

  return section;
}

function buildAlbumSection(albums) {
  const section = document.createElement("section");
  section.className = "section album-section";
  section.setAttribute("aria-labelledby", "albums-heading");

  const header = document.createElement("div");
  header.className = "section-header";

  const title = document.createElement("h2");
  title.className = "section-title";
  title.id = "albums-heading";
  title.textContent = "앨범";

  const copy = document.createElement("p");
  copy.className = "section-copy";
  copy.textContent =
    "원하는 플랫폼에서 바로 감상할 수 있도록 발매작 링크를 정리했습니다.";

  header.append(title, copy);

  const grid = document.createElement("div");
  grid.className = "album-grid";

  albums.forEach((album, index) => {
    const card = document.createElement("article");
    card.className = "album-card";
    card.setAttribute("aria-labelledby", `album-title-${index}`);

    const coverWrap = document.createElement("div");
    coverWrap.className = "album-cover-wrap";

    const cover = document.createElement("img");
    cover.className = "album-cover";
    cover.src = album.cover;
    cover.alt = `${album.title} album cover`;
    cover.loading = "lazy";
    cover.decoding = "async";
    cover.dataset.fallbackType = "album";
    cover.dataset.fallbackLabel = album.title;
    coverWrap.append(cover);

    const meta = document.createElement("div");
    meta.className = "album-meta";

    const albumTitle = document.createElement("h3");
    albumTitle.className = "album-title";
    albumTitle.id = `album-title-${index}`;
    albumTitle.textContent = album.title;

    const releaseDate = document.createElement("p");
    releaseDate.className = "album-date";
    releaseDate.textContent = `발매일 · ${album.releaseDate}`;

    meta.append(albumTitle, releaseDate);

    const platformGrid = document.createElement("div");
    platformGrid.className = "platform-grid";
    platformGrid.setAttribute("role", "list");

    album.links.forEach((platform) => {
      const link = createExternalLink(
        platform.label,
        platform.url,
        "platform-link",
        `${album.title} ${platform.label} 새 탭에서 열기`
      );
      link.setAttribute("role", "listitem");
      platformGrid.append(link);
    });

    card.append(coverWrap, meta, platformGrid);
    grid.append(card);
  });

  section.append(header, grid);
  return section;
}

function createFallbackDataUri(type, label) {
  const palette = fallbackPalette[type] || fallbackPalette.album;
  const safeLabel = escapeHtml(label);
  const safeType = escapeHtml(palette.text);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" role="img" aria-label="${safeLabel}">
      <defs>
        <linearGradient id="base" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${type === "artist" ? "#1e3557" : "#2f1c2f"}" />
          <stop offset="100%" stop-color="#090b11" />
        </linearGradient>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${palette.accent}" stop-opacity="0.55" />
          <stop offset="55%" stop-color="#171b25" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#090b11" />
        </linearGradient>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.08" />
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width="1200" height="1200" fill="url(#base)" />
      <rect width="1200" height="1200" fill="url(#bg)" />
      <circle cx="850" cy="220" r="210" fill="${palette.accent}" fill-opacity="0.18" />
      <circle cx="260" cy="980" r="260" fill="#4b5d8f" fill-opacity="0.18" />
      <rect width="1200" height="1200" filter="url(#grain)" opacity="0.35" />
      <text x="90" y="160" fill="rgba(255,255,255,0.42)" font-size="54" font-family="Arial, sans-serif" letter-spacing="10">${safeType}</text>
      <text x="90" y="1030" fill="#f4f1eb" font-size="108" font-weight="700" font-family="Arial, sans-serif">${safeLabel}</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function attachImageFallbacks() {
  const images = document.querySelectorAll("img[data-fallback-type]");

  images.forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        if (image.dataset.fallbackApplied === "true") {
          return;
        }

        image.dataset.fallbackApplied = "true";
        image.src = createFallbackDataUri(
          image.dataset.fallbackType,
          image.dataset.fallbackLabel || "Placeholder"
        );
      },
      { once: true }
    );
  });
}

function renderSite() {
  if (!app) {
    return;
  }

  const fragment = document.createDocumentFragment();
  fragment.append(buildHeroSection(siteData.artist));
  fragment.append(buildAlbumSection(siteData.albums));

  app.innerHTML = "";
  app.append(fragment);
  attachImageFallbacks();
  attachCopyHandlers();
}

function attachCopyHandlers() {
  const copyButtons = document.querySelectorAll(".contact-copy");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const email = button.dataset.email;
      if (!email) {
        return;
      }

      const originalText = button.textContent;

      try {
        await navigator.clipboard.writeText(email);
        button.textContent = "복사됨";
      } catch (error) {
        button.textContent = "복사 실패";
      }

      window.setTimeout(() => {
        button.textContent = originalText;
      }, COPY_RESET_DELAY);
    });
  });
}

renderSite();
