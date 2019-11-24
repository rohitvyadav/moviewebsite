
       var image =  new Vue({
            el: '#movie',
            data: {
                movie_title_and_banner:"",
                movie_summary_search:"",
                movie_name:"",
                movie_banner:"",
               
                movie_title:[],
                movie_img:[]
                
            },
            methods: {
                show_title_banner: function () {
                 
                    axios
                        .get('http://www.omdbapi.com/?apikey=e0620bd4&s=harry%20potter')
                        .then(response => (this.movie_title_and_banner = response.data.Search))
                    return this.movie_title_and_banner;
                    console.log(movie_title_and_banner);
                },

                 movie_summary:function(title)
                {
                    
                    axios
                    .get('http://www.omdbapi.com/?apikey=e0620bd4&s='+title)
                    .then(response => (this.movie_summary_search = response.data.Search))
                    return this.movie_summary_search;
                    //console.log(this.data_search);
                },
                  add_movie_name:function()
                {
                   
                   this.movie_title.push(this.movie_name);
                   this.movie_img.push(this.movie_banner);
                   console.log(this.movie_title);
                   console.log(this.movie_img);
                  
                 }
              
            },
           beforeMount() {
                this.show_title_banner()
            },
        });

