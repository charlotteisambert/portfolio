import { makeStyles, createStyles, Theme } from "@material-ui/core";

const ProjectsStyle = makeStyles((theme: Theme) => createStyles({
    wrapperComponent: {
        background: theme.palette.primary.dark,
    },
    wrapperTitle:{
        height:"10%"
      },
      title: {
        height: "fit-content",
      },
    wrapperProjects: {
        padding: "2rem 1rem",
        height: "fit-content",
    },
    wrapperCards: {
        padding: "2rem 0",
    },
    wrapperCard: {
        padding: "1rem",
        minHeight: "22rem"
    },
}));

export default ProjectsStyle;