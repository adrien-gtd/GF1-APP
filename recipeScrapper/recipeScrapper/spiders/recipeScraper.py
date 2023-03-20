import scrapy

class receipe(scrapy.Spider):
    name = "recipe" 

    def start_requests(self):
        yield scrapy.Request (
            url = self.url,
            callback= self.parse
        )

    def parse (self, response):
        p = open('data.txt', 'w')
        p.write(response.text)
        p.close()
