import { getCurrentUser } from "../actions/getCurrentUser";
import WarningText from "../components/WarningText";
import AuthContainer from "../components/containers/AuthContainer";

const Admin = async () => {

  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Buraya Girişin Yasaklı!!" />;
  }
  return (
    <AuthContainer>
      Görüntülenecek herhangi bir özet bulunmamaktadır...
    </AuthContainer>
  );
};

export default Admin;
