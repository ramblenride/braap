<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(243, 233, 230, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #e69c24;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  img {
    max-height: 60px;
    z-index: -1;
    float: left;
  }
</style>

<nav>
  <figure>
    <img alt="Braap! logo" src="braap.png" />
  </figure>

  <ul>
    <li>
      <a rel="prefetch" aria-current="{(segment === undefined || segment === 'viewer') ? 'page' : undefined}" href=".">
        viewer
      </a>
    </li>
    <li>
      <a rel="prefetch" aria-current="{segment === 'editor' ? 'page' : undefined}" href="editor">
        editor
      </a>
    </li>
    <li>
      <a rel="prefetch" aria-current="{segment === 'creator' ? 'page' : undefined}" href="creator">
        creator
      </a>
    </li>
  </ul>
</nav>
