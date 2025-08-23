
plugins {
    id("java")
}

group = "org.exampleMirax"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    implementation(files("libs/fastcgi-lib.jar"))
}

tasks.jar {
    manifest {
        attributes("Main-Class" to "org.exampleMirax.Main)")

    }
    from(configurations.runtimeClasspath.get().map { if (it.isDirectory) it else zipTree(it) })
    archiveFileName = "labwork1.jar"
}

tasks.test {
    useJUnitPlatform()
}