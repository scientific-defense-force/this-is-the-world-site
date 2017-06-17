FROM jekyll/jekyll:pages@sha256:922abf8d00a4b0b29e7b60077aae1b081bddc2de608072be5a635d00ea1c9cc1

RUN gem install 'html-proofer'
