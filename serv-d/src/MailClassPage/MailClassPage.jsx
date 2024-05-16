import DrawerParent from "../Drawer/DrawerParent";

export const MailClassPage = (props) => {
  const { mailClassName } = props;

  return (
    <>
      <DrawerParent />
      <h2>you are rendring {mailClassName} </h2>
    </>
  );
};
