import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.18)] overflow-hidden"
    >
      <div className="px-6 py-5">
        <h2 className="text-3xl font-bold mb-2 text-center tracking-tight bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Forgot Password
        </h2>

        <p className="text-gray-400 text-center text-sm mb-4">
          We&apos;ll send you a secure link to reset your password
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
              type="submit"
            >
              {isLoading ? (
                <Loader className="size-6 animate-spin mx-auto" />
              ) : (
                "Send Reset Link"
              )}
            </motion.button>
          </form>
        ) : (
          <div className="text-center pt-2 pb-1">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <Mail className="h-8 w-8 text-white" />
            </motion.div>

            <h3 className="text-lg font-semibold text-white mb-2">
              Check your email
            </h3>

            <p className="text-gray-400 leading-5 text-sm max-w-xs mx-auto">
              If an account exists for{" "}
              <span className="text-green-400 font-medium">{email}</span>,
              you&apos;ll receive a password reset link shortly.
            </p>
          </div>
        )}
      </div>

      <div className="px-8 py-3 bg-white/5 border-t border-white/10 backdrop-blur-sm flex justify-center">
        <Link
          to="/login"
          className="text-sm text-green-400 hover:text-green-300 transition-colors flex items-center font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Login
        </Link>
      </div>
    </motion.div>
  );
};

export default ForgotPasswordPage;