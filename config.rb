# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :directory_indexes
activate :meta_tags
page "/404.html", directory_index: false

# Load Sass from node_modules
config[:sass_assets_paths] << File.join(root, 'node_modules')

set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

# Layouts
# https://middlemanapp.com/basics/layouts/

activate :external_pipeline,
         name: :webpack,
         command: build? ? 'yarn run build' : 'yarn run start',
         source: 'dist',
         latency: 1

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false


# Reload the browser automatically whenever files change
 configure :development do
  set       :debug_assets, true
  activate :livereload
  activate :pry
end

page "/error/*", :layout => "error"

data.modeles.each do |modele|
  proxy "piscines/#{modele[0]}/index.html", "/piscines/show.html", locals: { owner: modele[0] }, ignore: true
end
# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  ignore   File.join(config[:js_dir], '*') # handled by webpack
  set      :asset_host, @app.data.site.host
  set      :relative_links, true
  activate :asset_hash
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
  activate :relative_assets
end

# activate middleman-deploy
# activate :deploy do |deploy|
#   deploy.build_before = true
#   deploy.deploy_method = :git
#   deploy.branch   = 'gh-pages'
# end
