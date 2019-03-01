# matches https://pages.github.com/versions/
FROM ruby:2.5.3

# ruby base doesn't specify locale
ENV LANG C.UTF-8
