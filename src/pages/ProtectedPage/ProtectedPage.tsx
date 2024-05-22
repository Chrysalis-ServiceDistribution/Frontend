import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Navigate } from "react-router";

export default function ProtectedPage(props: {
  children: React.ReactNode
}) {
  const { storedToken } = useContext(AuthContext);
  if (storedToken === null) {
    return <Navigate to='/auth' />;
  }
  return props.children;
}
