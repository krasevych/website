import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import SectionHeader from 'src/components/SectionHeader/SectionHeader.vue';
import ItemProgress from 'src/components/ItemProgress/ItemProgress.vue';
import MyTechnologies from 'src/components/MyTechnologies/MyTechnologies.vue';

@Component({
  components: {
    'kr-section-header': SectionHeader,
    'kr-item-progress': ItemProgress,
    'kr-my-technologies': MyTechnologies,
  },
})
class Skills extends Vue {
  title = 'my skills';
  description = 'Major skills that help me create beautiful websites';
  skills = [
    {
      title: 'Front-end Development',
      progress: 95,
    },
    {
      title: 'Back-end Development',
      progress: 75,
    },
    {
      title: 'Team Lead',
      progress: 80,
    }
  ];
}

export default Skills;
