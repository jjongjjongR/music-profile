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

  const labelText = document.createElement("span");
  labelText.textContent = label;
  link.append(labelText);

  return link;
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
