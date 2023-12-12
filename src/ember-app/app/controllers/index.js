import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.кадры.caption'),
          title: i18n.t('forms.application.sitemap.кадры.title'),
          children: [{
            link: 'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.увольнение.caption'),
          title: i18n.t('forms.application.sitemap.увольнение.title'),
          children: [{
            link: 'i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-l',
            caption: i18n.t('forms.application.sitemap.увольнение.i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-l.caption'),
            title: i18n.t('forms.application.sitemap.увольнение.i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l',
            caption: i18n.t('forms.application.sitemap.увольнение.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.увольнение.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})