require "bundler/gem_tasks"
require "jekyll"
require "listen"

def listen_ignore_paths(base, options)
  [
    /_config\.ya?ml/,
    /_site/,
    /\.jekyll-metadata/
  ]
end

def listen_handler(base, options)
  site = Jekyll::Site.new(options)
  Jekyll::Command.process_site(site)
  proc do |modified, added, removed|
    t = Time.now
    c = modified + added + removed
    n = c.length
    relative_paths = c.map{ |p| Pathname.new(p).relative_path_from(base).to_s }
    print Jekyll.logger.message("Regenerating:", "#{relative_paths.join(", ")} changed... ")
    begin
      Jekyll::Command.process_site(site)
      puts "regenerated in #{Time.now - t} seconds."
    rescue => e
      puts "error:"
      Jekyll.logger.warn "Error:", e.message
      Jekyll.logger.warn "Error:", "Run jekyll build --trace for more information."
    end
  end
end

task :preview do
  base = Pathname.new('.').expand_path
  options = {
    "source"        => base.join('test').to_s,
    "destination"   => base.join('test/_site').to_s,
    "force_polling" => false,
    "serving"       => true,
    "theme"         => "minimal-mistakes-jekyll"
  }

  options = Jekyll.configuration(options)

  ENV["LISTEN_GEM_DEBUGGING"] = "1"
  listener = Listen.to(
    base.join("_data"),
    base.join("_includes"),
    base.join("_layouts"),
    base.join("_sass"),
    base.join("assets"),
    options["source"],
    :ignore => listen_ignore_paths(base, options),
    :force_polling => options['force_polling'],
    &(listen_handler(base, options))
  )

  begin
    listener.start
    Jekyll.logger.info "Auto-regeneration:", "enabled for '#{options["source"]}'"

    unless options['serving']
      trap("INT") do
        listener.stop
        puts "     Halting auto-regeneration."
        exit 0
      end

      loop { sleep 1000 }
    end
  rescue ThreadError
    # You pressed Ctrl-C, oh my!
  end

  Jekyll::Commands::Serve.process(options)
end

desc "serve locally"
task :serve do
  sh "bundle exec jekyll serve --future --incremental --watch --livereload --drafts --host 0.0.0.0 --port 4000"
  # --livereload-port 3333 
  # sh "bundle exec jekyll serve --future --incremental --watch --drafts --host 0.0.0.0 --port 4000"
end

desc "serve simple"
task :s do
  #sh "bundle exec jekyll serve --future --incremental --watch --livereload --livereload-port 3333 --drafts --host 0.0.0.0 --port 4000"
  sh "bundle exec jekyll serve --future --drafts --host 0.0.0.0 --port 4000"
end

desc "Publicar en GitHub ULL-ESIT-GRADOII-PL/ull-esit-gradoii-pl-github.io"
task :default => [:pushPL, :push2021]

desc "Publicar en GitHub ULL-ESIT-GRADOII-PL/ull-esit-gradoii-pl-github.io"
task :pushPL do
  sh "git ci -am 'PL 2020/2021' && git push origin"
end

desc "Publicar en GitHub ULL-ESIT-PL-2021/ull-esit-pl-2021.github.io"
task :push2021 do
  sh "git push pl2021 main"
end

desc "Publicar en GitHub ULL-ESIT-GRADOII-PL/ull-esit-gradoii-pl-github.io and ULL-ESIT-PL-2021/ull-esit-pl-2021.github.io"
task :publish => [:pushPL, :push2021]

require 'html-proofer'
desc "test links in the build web site"
task :test do
  sh "bundle exec jekyll build"
  options = { 
    :assume_extension => true, 
    :disable_external => true, 
    :empty_alt_ignore => true,
    :file_ignore => [ %r{categories} ]
  }
  HTMLProofer.check_directory("./_site", options).run
end
