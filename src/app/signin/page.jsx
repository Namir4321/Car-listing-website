import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthProvider from "@/components/signin/AuthProvider";
import EmailProvider from "@/components/signin/EmailProvider";
import Link from "next/link";
const SignInPage = () => {
  return (
    <div className="sm:max-w-sm m-auto">
      <Card className="">
        <CardHeader>
          <CardTitle className="mt-2 text-3xl font-bold">Sign in</CardTitle>
          <CardDescription>to login into your account</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 ">
          <AuthProvider />
        </CardContent>
        <CardContent>
          <EmailProvider />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            No account?
            <span className="text-blue-600">
              <Link href="/signup"> Sign up</Link>
            </span>{" "}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
