export const homepageQuery = `
  *[_type == "page" && site == "ladnium" && slug.current == "home"][0] {
    ...,
    sections[] {
      ...,
      "image": image.asset->,
      "backgroundImage": backgroundImage.asset->,
      features[] {
        ...,
        "image": image.asset->
      },
      rewards[] {
        ...
      }
    },
    "ogImage": seo.ogImage.asset->
  }
`;

export const siteSettingsQuery = `
  *[_type == "siteSettings" && site == "ladnium"][0] {
    ...,
    "logo": logo.asset->,
    "favicon": favicon.asset->
  }
`;

export const mediaQuery = `
  *[_type == "media" && site == "ladnium"] {
    ...,
    "image": image.asset->,
    "video": video.asset->
  }
`;
