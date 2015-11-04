'use strict';

module.exports = `
<div class="list-block">
  <ul>
    <li>
      <div class="item-content">
        <div class="item-media">
          <i class="icon icon-form-email"></i>
        </div>
        <div class="item-inner">
          <div class="item-input">
            <input type="email" placeholder="email" v-model="user.email">
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="item-content">
        <div class="item-media">
          <i class="icon icon-form-password"></i>
        </div>
        <div class="item-inner">
          <div class="item-input">
            <input type="password" placeholder="password" v-model="user.password">
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
<div class="content-block">
  <a href="#" class="button button-big button-fill" @click="login">Login</a>
</div>
`;
