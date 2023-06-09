require 'json'

module Jekyll
  class JsonifyGenerator < Generator
    safe true
    priority :lowest

    def generate(site)
      data_dir = site.config['data_dir'] || '_data'
      output_dirs = {
        'contactme.yml' => '/assets/json',
        'donation.yml' => '/assets/json',
        'mynfts.yml' => '/assets/json'
        # 'file2.yml' => 'output/directory2',
        # Add more mappings for each YAML file and corresponding output directory
      }

      output_dirs.each do |yaml_file, output_dir|
        data = site.data[yaml_file]
        next if data.nil?

        File.open(File.join(site.dest, output_dir, "#{File.basename(yaml_file, '.yml')}.json"), 'w') do |file|
          file.write(JSON.dump(data))
        end
      end
    end
  end
end