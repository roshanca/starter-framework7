module.exports = `
<div>
  <div class="list-block media-list">
    <ul>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-form-name"></i></div>
        <div class="item-inner">
          <div class="item-title-row">
            <div class="item-title">{{user.email}}</div>
          </div>
          <div class="item-subtitle">Your Email</div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block">
    <a href="#" class="button button-big button-fill color-red" @click="logout">Sign Out</a>
  </div>
</div>
`;
