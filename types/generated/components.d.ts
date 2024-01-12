import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCopy extends Schema.Component {
  collectionName: 'components_blocks_copies';
  info: {
    displayName: 'Copy';
    icon: 'write';
  };
  attributes: {
    copy: Attribute.RichText;
  };
}

export interface BlocksHeroImage extends Schema.Component {
  collectionName: 'components_blocks_hero_images';
  info: {
    displayName: 'Hero Image';
    icon: 'picture';
  };
  attributes: {
    copilot_image: Attribute.String &
      Attribute.CustomField<'plugin::cn-image-preview.image-preview'>;
    alt_text: Attribute.String;
    file_name: Attribute.String;
  };
}

export interface BlocksProductGrid extends Schema.Component {
  collectionName: 'components_blocks_product_grids';
  info: {
    displayName: 'Product Grid';
    icon: 'apps';
  };
  attributes: {
    preview_products: Attribute.Relation<
      'blocks.product-grid',
      'oneToMany',
      'api::preview-product.preview-product'
    >;
  };
}

export interface BlocksQuote extends Schema.Component {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    quote: Attribute.Text;
  };
}

export interface BlocksSwiper extends Schema.Component {
  collectionName: 'components_blocks_swipers';
  info: {
    displayName: 'Swiper';
    icon: 'exit';
  };
  attributes: {
    preview_products: Attribute.Relation<
      'blocks.swiper',
      'oneToMany',
      'api::preview-product.preview-product'
    >;
  };
}

export interface DynamicMediaMediaType extends Schema.Component {
  collectionName: 'components_dynamic_media_media_types';
  info: {
    displayName: 'mediaType';
  };
  attributes: {
    image: Attribute.Component<'dynamic-media.media'>;
    video: Attribute.Component<'dynamic-media.video'>;
  };
}

export interface DynamicMediaMedia extends Schema.Component {
  collectionName: 'components_dynamic_media_media';
  info: {
    displayName: 'image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    altText: Attribute.String;
    copilotURL: Attribute.String &
      Attribute.CustomField<'plugin::cn-image-preview.image-preview'>;
    title: Attribute.String;
    name: Attribute.String;
    caption: Attribute.String;
  };
}

export interface DynamicMediaVideo extends Schema.Component {
  collectionName: 'components_dynamic_media_videos';
  info: {
    displayName: 'video';
    icon: 'play';
    description: '';
  };
  attributes: {
    fullCopilotVideo: Attribute.String;
    clipCopilotVideo: Attribute.String;
    posterCopilot: Attribute.String &
      Attribute.CustomField<'plugin::cn-image-preview.image-preview'>;
    name: Attribute.String;
    title: Attribute.String;
    caption: Attribute.String;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
    icon: 'expand';
  };
  attributes: {
    brand: Attribute.String;
    title: Attribute.String;
    dek: Attribute.String;
    author: Attribute.String;
  };
}

export interface HeroHeroSingle extends Schema.Component {
  collectionName: 'components_hero_hero_singles';
  info: {
    displayName: 'heroSingle';
    description: '';
  };
  attributes: {
    image: Attribute.String &
      Attribute.CustomField<'plugin::cn-image-preview.image-preview'>;
  };
}

export interface MediaMediaAlt extends Schema.Component {
  collectionName: 'components_media_media_alts';
  info: {
    displayName: 'mediaAlt';
    icon: 'fileError';
    description: '';
  };
  attributes: {
    videoURL: Attribute.String;
    image_altText: Attribute.String;
    image: Attribute.String &
      Attribute.CustomField<'plugin::cn-image-preview.image-preview'>;
    video_alttext: Attribute.String;
    ratio: Attribute.Enumeration<['a. 5:4', 'b. 4:5', 'c. 1:1', 'd. NA']>;
  };
}

export interface PhotoVogueGallerySingleAristsInfo extends Schema.Component {
  collectionName: 'components_photo_vogue_gallery_single_arists_infos';
  info: {
    displayName: 'singleAristsInfo';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    name: Attribute.String;
    media: Attribute.Component<'media.media-alt'>;
    caption: Attribute.Text;
  };
}

export interface ProductProductInfo extends Schema.Component {
  collectionName: 'components_product_product_infos';
  info: {
    displayName: 'productInfo';
    icon: 'discuss';
  };
  attributes: {
    productName: Attribute.String;
    productDescription: Attribute.Text;
    productPrice: Attribute.Decimal;
    productUrl: Attribute.String;
    cta: Attribute.String;
  };
}

export interface ProductProduct extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'product';
    icon: 'picture';
  };
  attributes: {
    media: Attribute.Component<'media.media-alt'>;
    productInfo: Attribute.Component<'product.product-info'>;
  };
}

export interface QuoteQuote extends Schema.Component {
  collectionName: 'components_quote_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    quote: Attribute.Text;
  };
}

export interface SliderSlider extends Schema.Component {
  collectionName: 'components_slider_sliders';
  info: {
    displayName: 'Slider';
    icon: 'exit';
  };
  attributes: {};
}

export interface SwiperSwiper extends Schema.Component {
  collectionName: 'components_swiper_swipers';
  info: {
    displayName: 'Swiper';
    icon: 'exit';
  };
  attributes: {
    preview_products: Attribute.Relation<
      'swiper.swiper',
      'oneToMany',
      'api::preview-product.preview-product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.copy': BlocksCopy;
      'blocks.hero-image': BlocksHeroImage;
      'blocks.product-grid': BlocksProductGrid;
      'blocks.quote': BlocksQuote;
      'blocks.swiper': BlocksSwiper;
      'dynamic-media.media-type': DynamicMediaMediaType;
      'dynamic-media.media': DynamicMediaMedia;
      'dynamic-media.video': DynamicMediaVideo;
      'header.header': HeaderHeader;
      'hero.hero-single': HeroHeroSingle;
      'media.media-alt': MediaMediaAlt;
      'photo-vogue-gallery.single-arists-info': PhotoVogueGallerySingleAristsInfo;
      'product.product-info': ProductProductInfo;
      'product.product': ProductProduct;
      'quote.quote': QuoteQuote;
      'slider.slider': SliderSlider;
      'swiper.swiper': SwiperSwiper;
    }
  }
}
