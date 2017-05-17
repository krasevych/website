import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import ImageText from 'src/components/ImageText/ImageText.vue';

@Component({
  components: {
    'kr-image-text': ImageText,
  },
})
class MyTechnologies extends Vue {
  technologies = [
    {
      image: '/images/my-technologies/babel.svg',
      title: 'Babel',
      text: 'I worked with Babel',
    },
    {
      image: '/images/my-technologies/typescript.jpg',
      title: 'Typescript',
      text: 'I worked with Typescript',
    },
    {
      image: '/images/my-technologies/backbone.png',
      title: 'BackBone',
      text: 'I worked with BackBone',
    },
    {
      image: '/images/my-technologies/angular.png',
      title: 'Angular',
      text: 'I worked with Angular',
    },
    {
      image: '/images/my-technologies/react.png',
      title: 'React',
      text: 'I worked with React',
    },
    {
      image: '/images/my-technologies/vue.png',
      title: 'Vue',
      text: 'I worked with Vue',
    },
    {
      image: '/images/my-technologies/nuxt.png',
      title: 'Nuxt',
      text: 'I worked with Nuxt',
    },
    {
      image: '/images/my-technologies/nodejs.png',
      title: 'Node',
      text: 'I worked with Node',
    },
    {
      image: '/images/my-technologies/express.png',
      title: 'Express',
      text: 'I worked with Express',
    },
    {
      image: '/images/my-technologies/mongo.png',
      title: 'Mongo',
      text: 'I worked with MongoDB',
    },
    {
      image: '/images/my-technologies/webpack.svg',
      title: 'Webpack',
      text: 'I worked with Webpack',
    },
    {
      image: '/images/my-technologies/gulp.png',
      title: 'Gulp',
      text: 'I worked with Gulp',
    },
    {
      image: '/images/my-technologies/less.png',
      title: 'Less',
      text: 'I worked with Less',
    },
    {
      image: '/images/my-technologies/sass.svg',
      title: 'Sass',
      text: 'I worked with Sass',
    },
    {
      image: '/images/my-technologies/material.svg',
      title: 'Angular Material',
      text: 'I worked with Angular Material',
    },
    {
      image: '/images/my-technologies/bootstrap.png',
      title: 'Bootstrap',
      text: 'I worked with Bootstrap',
    },
  ];

  incrementColorIndex = 0;

  calcColor(index) {
    const newIndex = index + this.incrementColorIndex;
    if (index % 4 === 0) this.incrementColorIndex = index / 4;
    return newIndex % 2 !== 0;
  }
}

export default MyTechnologies;
