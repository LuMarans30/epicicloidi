import numpy as np
import matplotlib.pyplot as plt
import sys
import os
import platform
import subprocess

from progress.bar import IncrementalBar


def is_tool(name):
    try:
        devnull = open(os.devnull)
        subprocess.Popen([name], stdout=devnull, stderr=devnull).communicate()
    except OSError as e:
        if e.errno == os.errno.ENOENT:
            return False
    return True


def epicycloid_plotter(precision, n, k, path, dpi):
    X = np.cos(np.linspace(0, 2 * np.pi, precision))
    Y = np.sin(np.linspace(0, 2 * np.pi, precision))

    fig = plt.figure(figsize=(19.2, 14.4))
    plt.plot(X, Y, c="r")
    final = zip(X, Y)

    X_1 = np.cos(n * np.linspace(0, 2 * np.pi, precision))
    Y_1 = np.sin(n * np.linspace(0, 2 * np.pi, precision))
    final_1 = zip(X_1, Y_1)

    finale = zip(final, final_1)
    for i in finale:
        plt.plot([i[0][0], i[1][0]], [i[0][1], i[1][1]], c="r")

    plt.axis("equal")

    index = ""

    if k < 10:
        index = "000" + str(k)

    if k >= 10 and k < 100:
        index = "00" + str(k)

    if k >= 100 and k < 1000:
        index = "0" + str(k)

    plt.gca().get_xaxis().set_visible(False)
    plt.gca().get_yaxis().set_visible(False)

    ax = plt.gca()

    ax.spines["right"].set_visible(False)
    ax.spines["top"].set_visible(False)
    ax.spines["left"].set_visible(False)
    ax.spines["bottom"].set_visible(False)

    plt.savefig(
        os.path.join(path, "epycicloid" + index + ".png"),
        dpi=dpi,
        bbox_inches="tight",
        transparent=True,
    )

    plt.close()


k = 1

print("Insert the minimum value of n: ", end="")
n_min = int(input())

if n_min <= 0:
    print("The values of n cannot be negative or equal to zero")
    sys.exit()

print("Insert the maximum value of n: ", end="")
n_max = int(input())

if n_max <= 0:
    print("The values of n cannot be negative or equal to zero")
    sys.exit()

if n_min >= n_max:
    print(
        "The minimum value of n cannot be greater or equal than the maximum value of n"
    )
    sys.exit()

if n_max > 9999 or n_min > 9999:
    print("The values of n cannot be greater than 9999")
    sys.exit()

print("Insert the increment of n in each iteration: ", end="")
n_step = float(input())

if n_step <= 0:
    print("The increment of n cannot be negative or equal to zero")
    sys.exit()

print("Insert the precision of the plot: ", end="")
precision = int(input())

if precision <= 0:
    print("The precision cannot be negative or equal to zero")
    sys.exit()

print("Where do you want to save the images? (default: ./epycicloid/): ", end="")
path = input()

if path != "":
    if not os.path.exists(path):
        print("The path does not exist")
        sys.exit()
else:
    path = "./epycicloid/"

print("Insert the DPI value of the images (default: 300): ", end="")
dpi = input()

if dpi == "":
    dpi = 300
else:
    dpi = int(dpi)

if dpi <= 0:
    print("The DPI value cannot be negative or equal to zero")
    sys.exit()

bar = IncrementalBar("Generating images: ", max=int((n_max - n_min) / n_step))

for i in np.arange(n_min, n_max, n_step):
    epicycloid_plotter(precision, i, k, path, dpi)
    k += 1
    bar.next()

bar.finish()

print("Done! The images are saved in the folder: " + path)

print("Do you want to generate a video? (y/n) (default: y):", end="")
video = input()

if video == "n" or video == "N":
    sys.exit()
else:
    print("Insert the name of the video (default: epycicloid): ", end="")
    filename = input()

    print("Insert the video extension (default: mp4): ", end="")
    extension = input()

    if extension == "":
        extension = "mp4"

    if filename == "":
        filename = "epycicloid." + extension
    else:
        filename = filename + "." + extension

    print("Insert the FPS value of the video (default: 30): ", end="")
    fps = input()

    if fps == "":
        fps = 30
    else:
        fps = int(fps)

    # e.g. ffmpeg -i epycicloid%04d.png -r 20 -pix_fmt yuva420p output.webm
    os.system(
        "ffmpeg -i "
        + path
        + "epycicloid%04d.png -r "
        + str(fps)
        + " -pix_fmt yuva420p "
        + filename
    )

    print("Done! The video is saved in the same folder of the images")

sys.exit()
