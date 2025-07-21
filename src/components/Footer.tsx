import React from "react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">AAASU Legacy</h3>
          <p className="text-gray-300">
            A digital testament to the power of friendship and the memories we
            create together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="/profiles"
                className="block text-gray-400 hover:text-white transition-colors">
                Profiles
              </a>
              <a
                href="/gallery"
                className="block text-gray-400 hover:text-white transition-colors">
                Gallery
              </a>
              <a
                href="/diary"
                className="block text-gray-400 hover:text-white transition-colors">
                Diary
              </a>
              <a
                href="/timeline"
                className="block text-gray-400 hover:text-white transition-colors">
                Timeline
              </a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">The Squad</h4>
            <div className="space-y-2">
              <p className="text-gray-400">Arun • Atul • Ashutosh</p>
              <p className="text-gray-400">Satyam • Utkarsh</p>
              <p className="text-primary-400 font-medium">
                Together Since 2018
              </p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:contact@aaasu.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Mail size={20} className="text-gray-300" />
              </a>
              <a
                href="https://github.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Github size={20} className="text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin size={20} className="text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with{" "}
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" /> by the
            AAASU Family
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 AAASU Legacy. A celebration of friendship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
