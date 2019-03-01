# rap-on-felix
Run Eclipse RAP on apache felix.
This is repackaged www.eclipse.org/rap. The idea came from https://eclipsesource.com/blogs/2012/08/29/using-eclipse-databinding-with-felix/ .
In projects org.eclipse.rap.filedialog and org.eclipse.rap.nebula.widgets.grid packages have been renamed - split packages problem.

Quick start.
You need java 11 installed.
Clone or download project, cd rap-on-felix, ./gradlew build export , cd org.eclipse.rap.examples/generated/distributions/executable, java -jar examples.jar. Now in your browser localhost:8080/.

Or you can install Eclipse from www.eclipse.org, install bndtools from www.bndtools.org (I use https://bndtools.jfrog.io/bndtools/update) and import bndtools workspace. Then go to org.eclipse.rap.examples project, open examples.bndrun file, click Resolve, click Run OSGI.

Your feedback and suggestions are welcome.
