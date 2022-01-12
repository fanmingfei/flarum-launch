import app from 'flarum/app';
window.abbb = app
app.initializers.add('fanmingfei/flarum-launch', () => {
  console.log('[flarum-launch] Hello, admin!');
  app.extensionData.for('fanmingfei-launch')
    .registerSetting({
      setting: 'fanmingfei-launch.image_url',
      type: 'text',
      label: '开屏图'// app.translator.trans('flarum-flags.admin.settings.image_url_')
    }, 15)
    // .registerSetting({
    //   setting: 'flarum-flags.guidelines_url',
    //   type: 'text',
    //   label: app.translator.trans('flarum-flags.admin.settings.guidelines_url_label')
    // }, 14)
    // .registerPermission({
    //   icon: 'fas fa-flag',
    //   label: 'uuuaaa',///app.translator.trans('flarum-flags.admin.permissions.view_flags_label'),
    //   permission: 'discussion.viewFlags'
    // }, 'moderate', 65)
    // .registerPermission({
    //   icon: 'fas fa-flag',
    //   label: 'uuaa',//app.translator.trans('flarum-flags.admin.permissions.flag_posts_label'),
    //   permission: 'discussion.flagPosts'
    // }, 'reply', 65);
});
