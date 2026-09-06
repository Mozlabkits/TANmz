# Guia Oficial do Projeto Android — TANmz

Este documento explica como o **TANmz (Biologia e Química ao alcance de todos)** foi estruturado como uma aplicação Android real, como gerar o ficheiro **APK instalável** e o pacote **AAB para a Google Play Store**.

---

## 1. O TANmz agora é um projeto Android real?

**SIM.** O projeto agora conta com a base de código Android nativa gerada e integrada no diretório `/android`. 

Contém todos os ficheiros de um projeto Android padrão:
* `android/app/src/main/AndroidManifest.xml` (com permissões de Internet e estado de rede, splash screen e atividade principal).
* `android/app/build.gradle` e `android/build.gradle` (com SDKs compilados, targetSdkVersion 36, minSdkVersion 24).
* `android/gradlew` e `android/gradlew.bat` (Gradle Wrapper oficial configurado).
* `android/app/src/main/java/mz/co/tanmz/app/MainActivity.java` (classe nativa do Android que inicializa o aplicativo).
* `android/app/src/main/assets/public/` (todos os recursos, resumos de aulas da 7ª à 12ª classe, exercícios, banco de simulados e estilos empacotados localmente).
* **Dualidade de Instalação:** Além do projeto nativo Android Studio/Gradle, também foi configurado o manifesto PWA (`public/manifest.webmanifest`) e Service Worker (`public/sw.js`), permitindo instalação imediata em smartphones Android diretamente via navegador.

---

## 2. Qual tecnologia foi utilizada?

* **Plataforma Nativa Android:** [Capacitor](https://capacitorjs.com/) (motor nativo moderno criado pela equipa do Ionic, padrão de mercado que substituiu o Cordova).
* **Camada de Apresentação e Conteúdos:** React 19 + TypeScript + Tailwind CSS compilados em bundle estático de altíssima performance.
* **Sistema de Build Android:** Gradle 8.14 com Android Gradle Plugin (AGP) e AndroidX AppCompat / SplashScreen.
* **Armazenamento Local:** Android WebStorage / `localStorage` nativo e isolado em sandbox no dispositivo do aluno (persistência de progresso, pontuações e lições concluídas mesmo sem internet).

---

## 3. Onde está o projeto Android?

O projeto Android nativo está localizado na pasta raiz:
```
/android
├── app
│   ├── build.gradle
│   └── src
│       └── main
│           ├── AndroidManifest.xml
│           ├── assets/public/       <-- Conteúdos e aulas empacotados
│           ├── java/mz/co/tanmz/app/MainActivity.java
│           └── res/                 <-- Ícones mipmap, cores e splash screen
├── build.gradle
├── settings.gradle
├── variables.gradle
├── gradlew
└── gradlew.bat
```

---

## 4. Como gerar o APK instalável (Passo a Passo)

### Opção A: Usando o Terminal (com Java/Android SDK instalado no seu computador)

1. No diretório raiz do projeto, garanta que os arquivos web mais recentes estão sincronizados:
   ```bash
   npm run android:sync
   ```
2. Entre na pasta `android`:
   ```bash
   cd android
   ```
3. Execute o comando Gradle para compilar o APK de depuração (Debug):
   * No Linux / macOS:
     ```bash
     ./gradlew assembleDebug
     ```
   * No Windows:
     ```cmd
     gradlew.bat assembleDebug
     ```
4. O ficheiro `.apk` pronto para instalar no telemóvel estará em:
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```
5. Basta transferir o ficheiro `app-debug.apk` para o seu telemóvel Android (via WhatsApp, Cabo USB ou Google Drive) e tocar nele para instalar.

---

### Opção B: Usando o Android Studio

1. Abra o **Android Studio**.
2. Escolha **Open** (Abrir Projeto) e selecione a pasta `android` deste repositório.
3. Aguarde o Gradle sincronizar as dependências.
4. Conecte o seu smartphone Android via USB (com Depuração USB ativa) ou inicie um emulador.
5. Clique no botão verde **Run ▶** (Executar) ou vá ao menu:
   * **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**.
6. Ao terminar, o Android Studio exibirá uma notificação com o link direto `locate` para o ficheiro `.apk` gerado.

---

## 5. Como gerar o AAB (Android App Bundle) para a Google Play Store

A Google Play Store exige o formato `.aab` para publicação de novas aplicações.

1. No terminal do seu computador (dentro da pasta `android`), execute:
   ```bash
   ./gradlew bundleRelease
   ```
2. O pacote gerado estará em:
   ```
   android/app/build/outputs/bundle/release/app-release.aab
   ```
3. **Assinatura da Aplicação (Keystore):**
   Para publicar na Play Store, assine o pacote com uma chave de produção (`.keystore` ou `.jks`):
   * No Android Studio: vá a **Build** > **Generate Signed Bundle / APK**.
   * Escolha **Android App Bundle**, crie ou selecione o seu ficheiro Keystore e defina as credenciais.
   * O Android Studio compilará o ficheiro `.aab` assinado e otimizado para submissão na Google Play Console.

---

## 6. Instalação Imediata no Smartphone (Sem precisar de PC)

O TANmz também foi configurado com suporte **WebAPK / PWA**:
1. Abra o link da aplicação no navegador Google Chrome ou Samsung Internet no seu smartphone Android.
2. O aplicativo exibirá um banner no topo: **"Instalar TANmz no Android"**.
3. Toque em **Instalar** (ou toque nos três pontinhos **⋮** do Chrome e selecione **"Instalar aplicativo"** ou **"Adicionar ao ecrã inicial"**).
4. O Android criará um ícone nativo no ecrã de aplicações do telemóvel. Quando aberto, ele roda em ecrã inteiro (standalone), com ícone próprio, tela de splash e **acesso offline total**.

---

## 7. Próximos Passos Recomendados

* Se desejar publicar na Play Store com a sua conta de desenvolvedor Google Play, substitua os ícones em `android/app/src/main/res/mipmap-*` pelo logotipo final oficial e configure o seu Keystore de lançamento.
* Sempre que editar lições ou questões no código web, execute `npm run android:sync` para atualizar automaticamente os ficheiros nativos em `android/app/src/main/assets/public`.
